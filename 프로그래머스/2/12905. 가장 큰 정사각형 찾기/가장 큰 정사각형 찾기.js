function solution(board) {
  const n = board.length;
  const m = board[0].length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 1인 칸만, 왼쪽·위·왼쪽위 정사각형 중 최소 + 1 이 현재 칸에서 가능한 한 변
      if (board[i][j] && i > 0 && j > 0) {
        board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
      }
      max = Math.max(max, board[i][j]);
    }
  }

  return max * max; // 한 변의 제곱 = 넓이
}
// 1. dp[i][j] = (i,j)를 오른쪽 아래로 하는 가장 큰 정사각형 한 변
// 2. board[i][j]===1이면 min(위, 왼, 왼위) + 1, 아니면 0
// 3. 최댓값의 제곱이 넓이. 첫 행/열은 그대로 둬도 됨 (한 변 최대 1)
