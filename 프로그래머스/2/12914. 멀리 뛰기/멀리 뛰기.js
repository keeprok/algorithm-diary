function solution(n) {
  const MOD = 1234567;

  if (n <= 2) return n;

  let prev2 = 1; // dp[1]
  let prev1 = 2; // dp[2]

  for (let i = 3; i <= n; i++) {
    const current = (prev1 + prev2) % MOD;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}