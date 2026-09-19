function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const grid = maps.map(row => row.split(''));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const answer = [];

  // 각 칸에서 시작해 아직 방문 안 한 육지면 BFS로 섬 전체 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 'X' || visited[i][j]) continue;

      let sum = 0;
      const queue = [[i, j]];
      visited[i][j] = true;

      while (queue.length) {
        const [r, c] = queue.shift();
        sum += Number(grid[r][c]); // 식량 누적

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

  answer.sort((a, b) => a - b); // 오름차순 정렬
  return answer.length ? answer : [-1];
}
// 1. 'X'(바다)가 아닌 칸을 시작점으로 BFS → 연결된 섬 하나를 통째로 탐색
// 2. 섬의 모든 칸 식량(숫자)을 합산해 저장, 방문 처리로 중복 방지
// 3. 섬별 식량 합을 오름차순 정렬, 섬이 없으면 [-1] 반환
