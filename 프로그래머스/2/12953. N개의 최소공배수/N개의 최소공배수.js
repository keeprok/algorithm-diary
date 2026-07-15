function solution(arr) {
  // 유클리드 호제법: b가 0이 될 때까지 (a, b) → (b, a % b) 반복
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // 두 수의 LCM = a * b / GCD(a, b)
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // 앞에서부터 두 수씩 LCM을 누적 계산
  return arr.reduce((acc, cur) => lcm(acc, cur));
}
// 1. 유클리드 호제법으로 GCD를 구하고, LCM = a * b / GCD
// 2. 배열 전체에 reduce로 누적 LCM을 계산
