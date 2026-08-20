function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const result = [];

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (maps[r][c] !== 'X' && !visited[r][c]) {
        // 새 섬 발견 → BFS로 연결된 육지 전체 탐색
        let food = 0;
        const queue = [[r, c]];
        visited[r][c] = true;

        while (queue.length) {
          const [cr, cc] = queue.shift();
          food += Number(maps[cr][cc]); // 칸의 식량 누적

          for (let d = 0; d < 4; d++) {
            const nr = cr + dx[d];
            const nc = cc + dy[d];
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols
                && !visited[nr][nc] && maps[nr][nc] !== 'X') {
              visited[nr][nc] = true;
              queue.push([nr, nc]);
            }
          }
        }
        result.push(food);
      }
    }
  }

  if (result.length === 0) return [-1];
  return result.sort((a, b) => a - b);
}
// 1. 'X'가 아닌 칸에서 BFS 시작 → 상하좌우 연결된 육지 전체를 하나의 섬으로 탐색
// 2. 각 섬의 숫자(식량) 합산 → 결과 배열에 추가
// 3. 오름차순 정렬 후 반환, 섬이 없으면 [-1]
