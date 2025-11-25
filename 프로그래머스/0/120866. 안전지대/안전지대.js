function solution(board) {
  const n = board.length;
  
  const danger = Array.from({ length: n }, () => Array(n).fill(0));

  const dirs = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],  [0, 0],  [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (const [dx, dy] of dirs) {
          const nx = i + dx;
          const ny = j + dy;
          if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            danger[nx][ny] = 1;
          }
        }
      }
    }
  }
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0 && danger[i][j] === 0) {
        answer++;
      }
    }
  }

  return answer;
}
