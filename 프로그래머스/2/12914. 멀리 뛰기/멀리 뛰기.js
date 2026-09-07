function solution(n) {
  const MOD = 1234567;
  if (n === 1) return 1;

  // dp[i] = i칸에 도달하는 방법의 수
  // 1칸 또는 2칸 점프 → dp[i] = dp[i-1] + dp[i-2] (피보나치)
  let a = 1; // dp[1]
  let b = 2; // dp[2]

  for (let i = 3; i <= n; i++) {
    [a, b] = [b, (a + b) % MOD];
  }

  return b % MOD;
}
// 1. 마지막 점프가 1칸 → dp[n-1]가지 / 2칸 → dp[n-2]가지
//    → dp[n] = dp[n-1] + dp[n-2] (피보나치 점화식)
// 2. 변수 2개만 유지해 O(1) 공간으로 구현
// 3. 수가 커지므로 1234567로 나눈 나머지 반환
