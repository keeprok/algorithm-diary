function solution(m, n, board) {
  // 문자열 보드를 2차원 배열로 변환
  const grid = board.map(row => row.split(''));
  let totalRemoved = 0;

  while (true) {
    // 1) 지울 2x2 블록의 좌상단 좌표를 표시
    const toRemove = new Set();
    for (let r = 0; r < m - 1; r++) {
      for (let c = 0; c < n - 1; c++) {
        const v = grid[r][c];
        if (v === '') continue;
        if (v === grid[r][c + 1] && v === grid[r + 1][c] && v === grid[r + 1][c + 1]) {
          toRemove.add(`${r},${c}`);
          toRemove.add(`${r},${c + 1}`);
          toRemove.add(`${r + 1},${c}`);
          toRemove.add(`${r + 1},${c + 1}`);
        }
      }
    }

    if (toRemove.size === 0) break; // 더 지울 게 없으면 종료

    // 2) 표시된 칸 제거
    for (const key of toRemove) {
      const [r, c] = key.split(',').map(Number);
      grid[r][c] = '';
    }
    totalRemoved += toRemove.size;

    // 3) 중력 적용: 각 열에서 남은 블록을 아래로 내림
    for (let c = 0; c < n; c++) {
      const col = [];
      for (let r = m - 1; r >= 0; r--) {
        if (grid[r][c] !== '') col.push(grid[r][c]);
      }
      for (let r = m - 1; r >= 0; r--) {
        grid[r][c] = col[m - 1 - r] || '';
      }
    }
  }

  return totalRemoved;
}
// 1. 모든 2x2 블록을 검사해 같은 문자면 좌표를 Set에 표시 (한 번에 동시 제거)
// 2. 표시된 칸을 비우고 제거 개수 누적
// 3. 중력: 각 열의 남은 블록을 아래로 채움 → 지울 게 없을 때까지 반복
