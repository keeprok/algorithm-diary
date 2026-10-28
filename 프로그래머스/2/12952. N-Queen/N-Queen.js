function solution(n) {
  let count = 0;
  const col = Array(n).fill(false);        // 같은 열
  const diag1 = Array(2 * n).fill(false);  // 우하향 대각선 (r + c)
  const diag2 = Array(2 * n).fill(false);  // 좌하향 대각선 (r - c + n)

  function dfs(r) {
    if (r === n) { count++; return; } // n행 모두 배치 성공

    for (let c = 0; c < n; c++) {
      if (col[c] || diag1[r + c] || diag2[r - c + n]) continue;
      col[c] = diag1[r + c] = diag2[r - c + n] = true;
      dfs(r + 1);
      col[c] = diag1[r + c] = diag2[r - c + n] = false; // 백트래킹
    }
  }

  dfs(0);
  return count;
}
// 1. 한 행에 퀸 1개 → 행 r에 열 c를 고르며 n행까지 배치
// 2. 열/대각선이 겹치면 스킵 (diag1=r+c, diag2=r-c+n)
// 3. n행 모두 놓으면 경우의 수 +1, 되돌리며 모든 경우 탐색
