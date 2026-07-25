function solution(m, n, picture) {
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  let numberOfArea = 0;
  let maxSizeOfOneArea = 0;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(r, c, color) {
    visited[r][c] = true;
    let size = 1;

    for (let d = 0; d < 4; d++) {
      const nr = r + dx[d];
      const nc = c + dy[d];
      // 범위 내이고, 같은 색이고, 아직 방문 안 한 칸만 탐색
      if (nr >= 0 && nr < m && nc >= 0 && nc < n
          && !visited[nr][nc] && picture[nr][nc] === color) {
        size += dfs(nr, nc, color);
      }
    }

    return size;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      // 색이 있고 아직 방문 안 한 칸 → 새 영역 발견
      if (picture[r][c] !== 0 && !visited[r][c]) {
        numberOfArea++;
        const size = dfs(r, c, picture[r][c]);
        maxSizeOfOneArea = Math.max(maxSizeOfOneArea, size);
      }
    }
  }

  return [numberOfArea, maxSizeOfOneArea];
}
// 1. 색이 있고 방문 안 한 칸에서 DFS 시작 → 같은 색 연결 영역 탐색
// 2. DFS 한 번 = 영역 1개 (numberOfArea++), 반환값으로 크기 추적
