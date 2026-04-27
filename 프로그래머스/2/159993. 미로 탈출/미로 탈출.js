function solution(maps) {
  let start, lever, exit;

  for (let r = 0; r < maps.length; r++) {
    for (let c = 0; c < maps[0].length; c++) {
      if (maps[r][c] === "S") start = [r, c];
      if (maps[r][c] === "L") lever = [r, c];
      if (maps[r][c] === "E") exit = [r, c];
    }
  }

  const toLever = bfs(maps, start, lever);
  if (toLever === -1) return -1;

  const toExit = bfs(maps, lever, exit);
  if (toExit === -1) return -1;

  return toLever + toExit;
}

function bfs(maps, start, target) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const queue = [[start[0], start[1], 0]];
  let idx = 0;
  visited[start[0]][start[1]] = true;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (idx < queue.length) {
    const [r, c, dist] = queue[idx++];

    if (r === target[0] && c === target[1]) {
      return dist;
    }

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
      if (visited[nr][nc]) continue;
      if (maps[nr][nc] === "X") continue;

      visited[nr][nc] = true;
      queue.push([nr, nc, dist + 1]);
    }
  }

  return -1;
}