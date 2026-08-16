function solution(line) {
  const points = [];

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a1, b1, c1] = line[i];
      const [a2, b2, c2] = line[j];

      // 크라머 공식으로 교점 계산 (계수가 크므로 BigInt로 오버플로우 방지)
      const denom = BigInt(a1) * BigInt(b2) - BigInt(b1) * BigInt(a2);
      if (denom === 0n) continue; // 평행 또는 일치 (교점 없음)

      const xNum = BigInt(b1) * BigInt(c2) - BigInt(b2) * BigInt(c1);
      const yNum = BigInt(a2) * BigInt(c1) - BigInt(a1) * BigInt(c2);

      // 정수 교점만 사용
      if (xNum % denom !== 0n || yNum % denom !== 0n) continue;

      points.push([Number(xNum / denom), Number(yNum / denom)]);
    }
  }

  if (points.length === 0) return [];

  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);

  // 최소 바운딩 박스 크기의 2차원 배열 생성 (기본값 '.')
  const board = Array.from({ length: maxY - minY + 1 }, () =>
    Array(maxX - minX + 1).fill('.')
  );

  for (const [x, y] of points) {
    // y축 반전: 좌표계의 위(큰 y) = 배열의 row 0
    board[maxY - y][x - minX] = '*';
  }

  return board.map(row => row.join(''));
}
// 1. 모든 직선 쌍의 교점을 크라머 공식으로 계산 → 정수 교점만 추출
// 2. 계수가 최대 10^10이므로 BigInt로 나눗셈 정확도 확보
// 3. 교점 범위로 최소 배열 생성 후 별(*) 표시, y 좌표 반전(위=row 0)
