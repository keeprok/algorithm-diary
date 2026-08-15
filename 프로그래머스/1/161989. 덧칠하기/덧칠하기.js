function solution(n, m, section) {
  let answer = 0;
  let painted = 0; // 마지막으로 롤러가 칠한 끝 위치 (1-indexed)

  for (const s of section) {
    if (s > painted) {
      // 아직 안 칠해진 구역 발견 → 이 위치에서 롤러 1회
      painted = s + m - 1; // 롤러는 [s, s+m-1] 범위 커버
      answer++;
    }
    // s <= painted이면 이미 칠해진 구역 → 스킵
  }

  return answer;
}
// 1. section을 왼쪽부터 순서대로 확인하며 아직 안 칠해진 구역이 나오면 그 위치에서 롤러 1회
// 2. 롤러를 최대한 오른쪽으로 밀수록 한 번에 더 많은 구역을 커버 → 최솟값 보장 (그리디)
