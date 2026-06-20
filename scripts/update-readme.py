#!/usr/bin/env python3
"""README.md의 Solo 재풀이 섹션을 git 이력·문제 README 기준으로 갱신합니다.

Solo 제출 시 커밋 메시지에 [solo] 태그를 붙이면 이 스크립트가 해당 문제를 인식합니다.
  예) [solo] [level 1] Title: 폰켓몬, Time: 0.56 ms, Memory: 33.2 MB

사용법:
  python scripts/update-readme.py
"""

from __future__ import annotations

import re
import subprocess
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
README = ROOT / "README.md"
PROBLEMS_DIR = ROOT / "프로그래머스"

CONCEPT_MAP = {
    "해시": "해시",
    "스택／큐": "스택/큐",
    "깊이／너비 우선 탐색（DFS／BFS）": "DFS/BFS",
    "깊이／너비 우선 탐색（DFS／BFS）": "DFS/BFS",
    "완전탐색": "완전탐색/백트래킹",
    "정렬": "정렬",
    "탐욕법（Greedy）": "탐욕법",
    "힙（Heap）": "힙",
}

TITLE_CONCEPT_MAP = {
    "문자열 내 마음대로 정렬하기": "정렬",
    "정수 내림차순으로 배치하기": "정렬",
    "삼총사": "DFS/BFS",
    "소수 만들기": "DFS/BFS",
    "전력망을 둘로 나누기": "DFS/BFS",
}

CONCEPT_ORDER = [
    "해시",
    "스택/큐",
    "DFS/BFS",
    "완전탐색/백트래킹",
    "정렬",
    "탐욕법",
    "힙",
    "기타",
]

MARKER_START = "<!-- auto-generated:solo -->"
MARKER_END = "<!-- /auto-generated:solo -->"


def run_git(*args: str) -> str:
    return subprocess.check_output(["git", *args], cwd=ROOT, text=True).strip()


def parse_git_history() -> tuple[dict[str, str], dict[str, str], set[str]]:
    """첫 AI 학습일, Solo 제출일, Solo 문제 집합을 git log에서 추출."""
    title_first_date: dict[str, str] = {}
    title_solo_date: dict[str, str] = {}
    solo_titles: set[str] = set()

    log = run_git("log", "--format=%ad|%s", "--date=short", "--reverse").splitlines()
    pattern = re.compile(r"\[level (\d+)\] Title: (.+?), Time:")

    for line in log:
        if "|" not in line:
            continue
        date, msg = line.split("|", 1)
        match = pattern.search(msg)
        if not match:
            continue
        title = match.group(2).strip()
        if "[solo]" in msg:
            solo_titles.add(title)
            title_solo_date[title] = date
        elif title not in title_first_date:
            title_first_date[title] = date

    return title_first_date, title_solo_date, solo_titles


def normalize_category(raw: str) -> str:
    if ">" in raw:
        raw = raw.split(">")[-1].strip()
    return raw


def concept_of(category: str) -> str:
    return CONCEPT_MAP.get(category, "기타")


def concept_for_problem(title: str, category: str) -> str:
    return TITLE_CONCEPT_MAP.get(title, concept_of(category))


def parse_problems(solo_titles: set[str]) -> list[dict]:
    problems: list[dict] = []
    seen: set[str] = set()

    for readme in PROBLEMS_DIR.rglob("README.md"):
        content = readme.read_text(encoding="utf-8")
        match = re.match(r"# \[level (\d+)\] (.+?) - (\d+)", content)
        if not match:
            continue

        level, title, problem_id = match.group(1), match.group(2), match.group(3)
        if title not in solo_titles or title in seen:
            continue

        cat_match = re.search(r"### 구분\s*\n\n(.+)", content)
        category = normalize_category(cat_match.group(1).strip()) if cat_match else "미분류"
        seen.add(title)
        problems.append(
            {
                "title": title,
                "level": level,
                "id": problem_id,
                "category": category,
                "concept": concept_for_problem(title, category),
            }
        )

    return problems


def link(problem: dict) -> str:
    url = f"https://school.programmers.co.kr/learn/courses/30/lessons/{problem['id']}"
    return f"[{problem['title']}]({url})"


def build_stats(
    solo_problems: list[dict],
    title_first_date: dict[str, str],
    title_solo_date: dict[str, str],
) -> str:
    start_date = run_git("log", "--format=%ad", "--date=short", "--reverse").splitlines()[0]
    latest_solo = max(title_solo_date.values()) if title_solo_date else start_date
    titles: set[str] = set()
    for line in run_git("log", "--format=%s", "--reverse").splitlines():
        m = re.search(r"Title: (.+?), Time:", line)
        if m and "[solo]" not in line:
            titles.add(m.group(1).strip())

    lines = [
        "## 진행 현황",
        "",
        "| 항목 | 내용 |",
        "|------|------|",
        f"| **시작일** | {start_date} |",
        f"| **최근 Solo 활동** | {latest_solo} |",
        f"| **누적 풀이** | {len(titles)}문제 (AI 보조 학습 포함) |",
        f"| **Solo 재풀이** | {len(solo_problems)}문제 |",
        "| **목표** | 코테 JS 100문제 완주 |",
        "",
        "> 이 README에는 **Solo로 혼자 풀어 검증한 문제**만 기록합니다. Solo 제출 시 커밋 메시지에 `[solo]` 태그를 붙이면 자동으로 반영됩니다.",
        "",
    ]
    return "\n".join(lines)


def build_solo_table(
    solo_problems: list[dict],
    title_first_date: dict[str, str],
    title_solo_date: dict[str, str],
) -> str:
    ordered = sorted(solo_problems, key=lambda p: title_solo_date.get(p["title"], ""))
    lines = [
        "## Solo 재풀이 현황",
        "",
        "AI와 함께 학습한 뒤, 코드를 지우고 주석부터 다시 풀어 제출한 문제입니다.",
        "",
        "| # | 문제 | 개념 | 레벨 | AI 학습일 | Solo 제출일 |",
        "|---|------|------|------|-----------|-------------|",
    ]
    for i, problem in enumerate(ordered, 1):
        ai_date = title_first_date.get(problem["title"], "-")
        solo_date = title_solo_date.get(problem["title"], "-")
        lines.append(
            f"| {i} | {link(problem)} | {problem['concept']} | L{problem['level']} "
            f"| {ai_date} | {solo_date} |"
        )
    lines.append("")
    return "\n".join(lines)


def build_by_concept(
    solo_problems: list[dict],
    title_first_date: dict[str, str],
    title_solo_date: dict[str, str],
) -> str:
    by_concept: dict[str, list[dict]] = defaultdict(list)
    for problem in solo_problems:
        by_concept[problem["concept"]].append(problem)

    lines = ["## 개념별 Solo 풀이", ""]
    for concept in CONCEPT_ORDER:
        items = by_concept.get(concept)
        if not items:
            continue
        items = sorted(items, key=lambda p: title_solo_date.get(p["title"], ""))
        lines.append(f"### {concept} ({len(items)}문제)")
        lines.append("")
        lines.append("| 문제 | 레벨 | AI 학습일 | Solo 제출일 |")
        lines.append("|------|------|-----------|-------------|")
        for problem in items:
            ai_date = title_first_date.get(problem["title"], "-")
            solo_date = title_solo_date.get(problem["title"], "-")
            lines.append(
                f"| {link(problem)} | L{problem['level']} | {ai_date} | {solo_date} |"
            )
        lines.append("")

    return "\n".join(lines)


def build_generated_block(
    solo_problems: list[dict],
    title_first_date: dict[str, str],
    title_solo_date: dict[str, str],
) -> str:
    parts = [
        MARKER_START,
        build_stats(solo_problems, title_first_date, title_solo_date),
        build_solo_table(solo_problems, title_first_date, title_solo_date),
        build_by_concept(solo_problems, title_first_date, title_solo_date),
        MARKER_END,
    ]
    return "\n".join(parts)


def update_readme(content: str, generated: str) -> str:
    pattern = re.compile(
        re.escape(MARKER_START) + r".*?" + re.escape(MARKER_END),
        re.DOTALL,
    )
    if pattern.search(content):
        return pattern.sub(generated, content)

    # 최초 실행: 학습 방법 섹션 뒤에 삽입
    anchor = "## 학습 방법"
    if anchor not in content:
        return content.rstrip() + "\n\n" + generated + "\n"
    before, after = content.split(anchor, 1)
    # 학습 방법 블록 끝(다음 ## 섹션 전)까지 유지
    method_end = re.search(r"\n## ", after)
    if method_end:
        method_block = after[: method_end.start()]
        rest = after[method_end.start() :]
        # 기존 auto 섹션 제거
        rest = pattern.sub("", rest)
        return before + anchor + method_block + "\n" + generated + "\n" + rest.lstrip("\n")
    return before + anchor + after + "\n\n" + generated + "\n"


def main() -> int:
    title_first_date, title_solo_date, solo_titles = parse_git_history()
    solo_problems = parse_problems(solo_titles)

    if not README.exists():
        print("README.md가 없습니다.", file=sys.stderr)
        return 1

    generated = build_generated_block(solo_problems, title_first_date, title_solo_date)
    updated = update_readme(README.read_text(encoding="utf-8"), generated)
    README.write_text(updated, encoding="utf-8")
    print(f"README 갱신 완료 — Solo {len(solo_problems)}문제 반영")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
