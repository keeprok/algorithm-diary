function solution(arrayA, arrayB) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // A 전체의 GCD = A의 모든 원소를 나누는 가장 큰 수
  const gcdA = arrayA.reduce(gcd);
  // B 전체의 GCD = B의 모든 원소를 나누는 가장 큰 수
  const gcdB = arrayB.reduce(gcd);

  // gcdA가 B의 어떤 원소도 나누지 않으면 유효한 후보
  const candidateA = arrayB.every(n => n % gcdA !== 0) ? gcdA : 0;
  // gcdB가 A의 어떤 원소도 나누지 않으면 유효한 후보
  const candidateB = arrayA.every(n => n % gcdB !== 0) ? gcdB : 0;

  return Math.max(candidateA, candidateB);
}
// 1. GCD(A) = A의 모든 원소를 나누는 최대값 → A 조건을 만족하는 후보 중 가장 큰 수
// 2. GCD(A)가 B의 어떤 원소도 나누지 않으면 이 값이 A→B 방향의 정답 후보
// 3. 반대 방향(B→A)도 동일하게 계산 후 둘 중 최댓값 반환
