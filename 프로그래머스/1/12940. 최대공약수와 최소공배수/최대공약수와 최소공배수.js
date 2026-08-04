function solution(n, m) {
  // 유클리드 호제법으로 GCD 계산
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  const g = gcd(n, m);
  const l = (n * m) / g; // LCM = a * b / GCD

  return [g, l];
}
// 1. 유클리드 호제법: b가 0이 될 때까지 (a,b) → (b, a%b) 반복
// 2. LCM = n * m / GCD (두 수의 곱을 최대공약수로 나눔)
