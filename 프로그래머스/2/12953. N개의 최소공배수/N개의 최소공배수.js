function solution(arr) {
  // 두 수의 최대공약수(GCD): gcd(a, b) = gcd(b, a % b), b가 0이면 a가 GCD
  // 두 수의 최소공배수(LCM): a * b / gcd(a, b)

  // arr 전체의 LCM = 앞에서부터 두 수씩 LCM을 구해 누적
  // ex) lcm(lcm(lcm(arr[0], arr[1]), arr[2]), arr[3]) ...

}
// 1. 유클리드 호제법으로 GCD를 구하고, LCM = a * b / GCD
// 2. 배열 전체에 reduce로 누적 LCM을 계산
