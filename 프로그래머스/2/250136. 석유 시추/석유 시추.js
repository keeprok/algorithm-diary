function solution(land) {
  const rows = land.length;
  const cols = land[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  // 각 열이 포함하는 석유 덩어리 크기의 합
  const colOil = Array(cols).fill(0);

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(r, c) {
    visited[r][c] = true;
    const cells = [[r, c]]; // 이 덩어리에 속한 셀 목록
    let size = 1;
    const queue = [[r, c]];

    while (queue.length) {
      const [cr, cc] = queue.shift();
      for (let d = 0; d < 4; d++) {
        const nr = cr + dx[d];
        const nc = cc + dy[d];
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols
            && !visited[nr][nc] && land[nr][nc] === 1) {
          visited[nr][nc] = true;
          size++;
          cells.push([nr, nc]);
          queue.push([nr, nc]);
        }
      }
    }

    // 이 덩어리가 걸치는 열마다 덩어리 크기를 더함 (중복 방지: Set으로 열 집합)
    const colSet = new Set(cells.map(([, c]) => c));
    for (const col of colSet) {
      colOil[col] += size;
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (land[r][c] === 1 && !visited[r][c]) {
        dfs(r, c);
      }
    }
  }

  // 시추 열 중 가장 많은 석유를 얻을 수 있는 값 반환
  return Math.max(...colOil);
}
// 1. DFS(BFS)로 연결된 석유 덩어리를 탐색하고 크기를 구함
// 2. 덩어리가 걸치는 각 열에 크기를 누적 → 열별 시추 가능 석유량
// 3. 열별 합산 최댓값이 정답
