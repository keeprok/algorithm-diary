function solution(rectangle, characterX, characterY, itemX, itemY) {
  const SIZE = 102;
  const board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

  for (const [x1, y1, x2, y2] of rectangle) {
    const a = x1 * 2;
    const b = y1 * 2;
    const c = x2 * 2;
    const d = y2 * 2;
    for (let x = a; x <= c; x++) {
      for (let y = b; y <= d; y++) {
        if (x === a || x === c || y === b || y === d) {
          if (board[x][y] !== 2) board[x][y] = 1; // 테두리
        } else {
          board[x][y] = 2; // 내부는 못 감
        }
      }
    }
  }

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
  const sx = characterX * 2;
  const sy = characterY * 2;
  const tx = itemX * 2;
  const ty = itemY * 2;
  const q = [[sx, sy, 0]];
  visited[sx][sy] = true;
  let head = 0;

  while (head < q.length) {
    const [x, y, dist] = q[head++];
    if (x === tx && y === ty) return dist / 2;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= SIZE || ny >= SIZE) continue;
      if (visited[nx][ny] || board[nx][ny] !== 1) continue;
      visited[nx][ny] = true;
      q.push([nx, ny, dist + 1]);
    }
  }
}
// 1. 좌표≤50, 사각형≤4 → 2배 격자로 테두리 BFS. 1배면 붙어 있는 변이 뚫림
// 2. 테두리=1, 내부=2. 나중에 덮인 내부는 테두리로 되돌리지 않음
// 3. 방문은 큐에 넣는 순간. 실제 거리는 2배이므로 /2
