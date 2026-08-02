function solution(n) {
  const sqrt = Math.sqrt(n);
  // 제곱근이 정수이면 (√n + 1)² 반환, 아니면 -1
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}
// 1. Math.sqrt로 제곱근 계산 후 Number.isInteger로 정수 여부 확인
// 2. 정수 제곱근이면 다음 정수의 제곱 반환, 아니면 -1
