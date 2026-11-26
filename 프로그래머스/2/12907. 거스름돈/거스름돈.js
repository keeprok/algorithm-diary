function solution(n, money) {
  const MOD = 1_000_000_007;
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;

  for (const coin of money) {
    for (let i = coin; i <= n; i++) {
      dp[i] = (dp[i] + dp[i - coin]) % MOD;
    }
  }

  return dp[n];
}
// 1. n≤1e5, 동전≤100 → O(동전*n). 순열을 세면 중복이 나와서 동전을 바깥 루프
// 2. dp[i] = i원을 만드는 방법 수. 이 동전을 안 씀(기존) + 한 개 이상 씀(dp[i-coin])
// 3. dp[0]=1 (0원은 아무 동전도 안 쓰는 1가지). 답이 커져서 % 1e9+7
