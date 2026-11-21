function solution(n) {
  if (n % 2) return 0; // 홀수는 3xn을 1x2, 2x1로 못 채움
  const MOD = 1_000_000_007;
  let prev4 = 1; // dp[0]
  let prev2 = 3; // dp[2]
  if (n === 2) return 3;

  for (let i = 4; i <= n; i += 2) {
    const cur = (4 * prev2 - prev4 + MOD) % MOD;
    prev4 = prev2;
    prev2 = cur;
  }
  return prev2;
}
// 1. n≤5000 → O(N) DP. 홀수는 타일 면적이 안 맞아서 0
// 2. 점화식 dp[n] = 4*dp[n-2] - dp[n-4] (특수 타일 겹침을 빼는 형태)
// 3. 모듈러 전에 음수가 될 수 있어 +MOD 후 %MOD
