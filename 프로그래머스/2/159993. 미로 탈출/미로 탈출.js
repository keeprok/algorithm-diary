function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const grid = maps.map((row) => row.split(''));

  let S, L, E;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 'S') S = [i, j];
      if (grid[i][j] === 'L') L = [i, j];
      if (grid[i][j] === 'E') E = [i, j];
    }
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // start → end 최단거리 (벽 X 통과 불가)
  const bfs = (start, end) => {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[start[0], start[1], 0]];
    visited[start[0]][start[1]] = true;
    let head = 0;

    while (head < queue.length) {
      const [r, c, dist] = queue[head++];
      if (r === end[0] && c === end[1]) return dist;

      for (let d = 0; d < 4; d++) {
        const nr = r + dx[d];
        const nc = c + dy[d];
        if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
        if (visited[nr][nc] || grid[nr][nc] === 'X') continue;
        visited[nr][nc] = true;
        queue.push([nr, nc, dist + 1]);
      }
    }
    return -1;
  };

  const toLever = bfs(S, L);
  const toExit = bfs(L, E);
  if (toLever < 0 || toExit < 0) return -1;
  return toLever + toExit;
}
// 1. 출구는 레버를 당긴 뒤에만 열림 → 반드시 S → L → E 순서로 이동
// 2. 가중치 없는 최단거리이므로 BFS를 두 번 (S→L, L→E)
// 3. 한쪽이라도 도달 불가면 -1, 아니면 두 거리의 합
