function solution(board) {
  const n = board.length;
  const m = board[0].length;

  let start, goal;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "R") start = [i, j];
      if (board[i][j] === "G") goal = [i, j];
    }
  }

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const queue = [[...start, 0]];
  visited[start[0]][start[1]] = true;

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  while (queue.length) {
    const [r, c, dist] = queue.shift();

    if (r === goal[0] && c === goal[1]) return dist;

    for (const [dr, dc] of dirs) {
      let nr = r;
      let nc = c;

      // 끝까지 미끄러짐
      while (true) {
        const tr = nr + dr;
        const tc = nc + dc;

        if (
          tr < 0 || tr >= n ||
          tc < 0 || tc >= m ||
          board[tr][tc] === "D"
        ) break;

        nr = tr;
        nc = tc;
      }

      if (!visited[nr][nc]) {
        visited[nr][nc] = true;
        queue.push([nr, nc, dist + 1]);
      }
    }
  }

  return -1;
}