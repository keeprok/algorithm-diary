function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && maps[i][j] !== 'X') {
        let sum = 0;
        const queue = [[i, j]];
        visited[i][j] = true;

        while (queue.length) {
          const [r, c] = queue.shift();
          sum += Number(maps[r][c]);

          for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
              nr < 0 || nr >= n ||
              nc < 0 || nc >= m ||
              visited[nr][nc] ||
              maps[nr][nc] === 'X'
            ) continue;

            visited[nr][nc] = true;
            queue.push([nr, nc]);
          }
        }

        result.push(sum);
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}