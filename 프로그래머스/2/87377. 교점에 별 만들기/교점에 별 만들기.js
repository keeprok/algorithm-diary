function solution(line) {
  const points = [];
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];
      const det = a * d - b * c;
      if (det === 0) continue; // 평행

      const xNum = b * f - e * d;
      const yNum = e * c - a * f;
      if (xNum % det !== 0 || yNum % det !== 0) continue; // 정수 좌표만

      const x = xNum / det;
      const y = yNum / det;
      points.push([x, y]);
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
  }

  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  const board = Array.from({ length: h }, () => Array(w).fill('.'));
  for (const [x, y] of points) {
    board[maxY - y][x - minX] = '*'; // 배열 행은 y가 위→아래로 뒤집힘
  }

  return board.map((row) => row.join(''));
}
// 1. 직선 쌍의 교점 (x,y) = 크래머 공식, det=0이면 평행
// 2. 나누어떨어질 때만 정수 격자점 → 별
// 3. 모든 별을 포함하는 최소 사각형에 '*' / '.' 그리기 (y축 반전)
