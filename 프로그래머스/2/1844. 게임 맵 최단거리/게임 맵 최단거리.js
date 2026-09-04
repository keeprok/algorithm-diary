function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [[0, 0, 1]]; // [행, 열, 현재까지 거리]
  maps[0][0] = 0;            // 방문 표시 (별도 visited 대신 원본 수정)

  while (queue.length) {
    const [r, c, dist] = queue.shift();

    // 목적지 도달 → 최단 거리 반환 (BFS 특성상 처음 도달 = 최단)
    if (r === n - 1 && c === m - 1) return dist;

    for (let d = 0; d < 4; d++) {
      const nr = r + dx[d];
      const nc = c + dy[d];
      if (nr >= 0 && nr < n && nc >= 0 && nc < m && maps[nr][nc] === 1) {
        maps[nr][nc] = 0; // 방문 처리
        queue.push([nr, nc, dist + 1]);
      }
    }
  }

  return -1; // 목적지에 도달할 수 없는 경우
}
// 1. BFS: 시작점 (0,0)에서 출발해 상하좌우 탐색
// 2. 처음 목적지에 도달한 순간의 거리 = 최단 거리 (BFS 특성)
// 3. 방문 처리는 maps[nr][nc] = 0 으로 (큐에 넣기 직전 처리해야 중복 방지)
// 4. 큐가 소진될 때까지 도달 못 하면 -1
