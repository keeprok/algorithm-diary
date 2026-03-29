function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const queue = [[0, 0, 1]];
  let head = 0;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (head < queue.length) {
    const [x, y, dist] = queue[head++];

    if (x === n - 1 && y === m - 1) return dist;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1
      ) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}