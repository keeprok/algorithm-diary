function solution(n) {
  const MOD = 1000000007;
  // dp[i] = 2×i 직사각형을 채우는 경우의 수
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    // 마지막 열을 세로 1개로 채우면 dp[i-1], 가로 2개로 채우면 dp[i-2]
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  return dp[n];
}
// 1. 마지막 열을 채우는 방법이 2가지(세로1개 or 가로2개)뿐이므로 dp[i] = dp[i-1] + dp[i-2]
// 2. n이 커지면 오버플로우 방지를 위해 1000000007로 나눈 나머지를 저장
