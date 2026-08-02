function solution(n) {
  // 삼각형 배열 생성: i번째 행은 i+1개의 셀
  const tri = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

  // 3방향 순환: 아래(↓) → 오른쪽(→) → 대각선 위(↖)
  const dr = [1, 0, -1];
  const dc = [0, 1, -1];

  let r = 0, c = 0, dir = 0;
  const total = (n * (n + 1)) / 2;

  for (let num = 1; num <= total; num++) {
    tri[r][c] = num;

    const nr = r + dr[dir];
    const nc = c + dc[dir];

    // 다음 위치가 범위 밖이거나 이미 채워진 칸이면 방향 전환
    const outOfRange = nr < 0 || nr >= n || nc < 0 || nc >= tri[nr].length;
    if (outOfRange || tri[nr][nc] !== 0) {
      dir = (dir + 1) % 3;
    }
    r += dr[dir];
    c += dc[dir];
  }

  return tri.flat();
}
// 1. ↓ → ↖ 순으로 3방향 순환하며 삼각형을 달팽이처럼 채움
// 2. 다음 칸이 범위 밖이거나 이미 채워졌으면 방향을 전환한 뒤 이동
// 3. 완성된 2D 삼각형 배열을 flat()으로 1차원 배열로 반환
