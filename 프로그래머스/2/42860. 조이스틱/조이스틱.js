function solution(name) {
  const n = name.length;

  // 상하 조작: 각 글자를 A에서 목표 문자로 바꾸는 최솟값 합산
  let upDown = 0;
  for (const c of name) {
    upDown += Math.min(c.charCodeAt(0) - 65, 91 - c.charCodeAt(0));
    // 위로: c - 'A'번 / 아래로: 'Z' - c + 1번 → 둘 중 작은 값
  }

  // 좌우 조작: 모든 non-A 위치를 방문하는 최소 이동 횟수
  let move = n - 1; // 기본: 오른쪽 끝까지만 가는 경우

  for (let i = 0; i < n; i++) {
    // i 다음 A 연속 구간 건너뛰기 (A는 변경 불필요)
    let next = i + 1;
    while (next < n && name[next] === 'A') next++;

    // i까지 오른쪽 → 다시 0으로 → 왼쪽으로 (n - next)
    const rightFirst = 2 * i + (n - next);
    // 왼쪽으로 (n - next) → 다시 0으로 → i까지 오른쪽
    const leftFirst = i + 2 * (n - next);
    move = Math.min(move, rightFirst, leftFirst);
  }

  return upDown + move;
}
// 1. 상하: 각 문자를 위/아래 중 더 가까운 방향으로 변경 → 합산
// 2. 좌우: 연속된 A 구간을 건너뛰며, 오른쪽 먼저 vs 왼쪽 먼저 중 최솟값 선택
//    (A는 바꿀 필요 없으므로 건너뛰면 불필요한 이동 제거 가능)
