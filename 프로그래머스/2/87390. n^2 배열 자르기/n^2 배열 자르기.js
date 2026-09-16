function solution(n, left, right) {
  const answer = [];

  // left ~ right 인덱스만 직접 값 계산 (배열 전체를 만들지 않음)
  for (let k = left; k <= right; k++) {
    const row = Math.floor(k / n);
    const col = k % n;
    answer.push(Math.max(row, col) + 1); // 2차원 배열 규칙: max(행, 열) + 1
  }

  return answer;
}
// 1. n x n 배열의 (row, col) 값은 max(row, col) + 1 규칙을 따름
// 2. 1차원 인덱스 k → row = k/n, col = k%n 로 환산
// 3. left~right 구간만 계산 → n이 10^7까지여도 메모리 초과 없이 처리
