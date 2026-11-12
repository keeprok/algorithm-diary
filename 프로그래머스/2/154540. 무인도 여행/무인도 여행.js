function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const grid = maps.map((row) => row.split(''));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const answer = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 'X' || visited[i][j]) continue;

      let sum = 0;
      const queue = [[i, j]];
      visited[i][j] = true;
      let head = 0;

      while (head < queue.length) {
        const [r, c] = queue[head++];
        sum += Number(grid[r][c]);

        for (let d = 0; d < 4; d++) {
          const nr = r + dx[d];
          const nc = c + dy[d];
          if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
          if (visited[nr][nc] || grid[nr][nc] === 'X') continue;
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
      answer.push(sum);
    }
  }

  answer.sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}
// 1. 'X'가 아닌 칸에서 BFS → 연결된 섬 하나의 식량을 합산
// 2. 방문 처리는 큐에 넣는 순간 (중복 탐색 방지)
// 3. 섬별 합을 오름차순 정렬, 섬이 없으면 [-1]
