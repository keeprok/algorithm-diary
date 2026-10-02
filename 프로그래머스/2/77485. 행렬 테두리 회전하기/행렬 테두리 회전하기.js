function solution(rows, columns, queries) {
  // 1부터 순서대로 채운 행렬 생성
  const matrix = [];
  let num = 1;
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < columns; c++) row.push(num++);
    matrix.push(row);
  }

  const answer = [];

  for (const [x1, y1, x2, y2] of queries) {
    // 0-based로 변환
    const r1 = x1 - 1, c1 = y1 - 1, r2 = x2 - 1, c2 = y2 - 1;

    let prev = matrix[r1][c1 + 1]; // 시계방향 회전 시작값 기억
    let minVal = matrix[r1][c1];

    // 윗변: 왼→오 (한 칸씩 당겨옴)
    for (let c = c1 + 1; c <= c2; c++) {
      const tmp = matrix[r1][c];
      matrix[r1][c] = prev;
      prev = tmp;
      minVal = Math.min(minVal, matrix[r1][c]);
    }
    // 오른변: 위→아래
    for (let r = r1 + 1; r <= r2; r++) {
      const tmp = matrix[r][c2];
      matrix[r][c2] = prev;
      prev = tmp;
      minVal = Math.min(minVal, matrix[r][c2]);
    }
    // 아랫변: 오→왼
    for (let c = c2 - 1; c >= c1; c--) {
      const tmp = matrix[r2][c];
      matrix[r2][c] = prev;
      prev = tmp;
      minVal = Math.min(minVal, matrix[r2][c]);
    }
    // 왼변: 아래→위
    for (let r = r2 - 1; r >= r1; r--) {
      const tmp = matrix[r][c1];
      matrix[r][c1] = prev;
      prev = tmp;
      minVal = Math.min(minVal, matrix[r][c1]);
    }

    answer.push(minVal);
  }

  return answer;
}
// 1. 1부터 채운 행렬에서 각 쿼리의 테두리를 시계방향으로 한 칸씩 회전
// 2. 윗변→오른변→아랫변→왼변 순서로 prev 값을 당겨오며 이동
// 3. 회전에 참여한 값들 중 최솟값을 쿼리 결과로 저장
