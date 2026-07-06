// 멀리 뛰기 (DP)
// 1. n칸을 1칸 또는 2칸 점프로만 가는 경우의 수를 구한다
// 2. dp[i] = i칸에 도달하는 방법 수, dp[1]=1, dp[2]=2
// 3. i칸에는 (i-1)에서 1칸 뛰거나 (i-2)에서 2칸 뛰어 올 수 있다
// 4. 따라서 dp[i] = dp[i-1] + dp[i-2] (피보나치와 같은 점화식)
// 5. 배열 대신 prev2, prev1 두 변수로 이전 두 값만 갱신한다
// 6. 매 단계마다 1234567로 나눈 나머지를 저장한다
// 7. n번 반복 후 prev1 return

function solution(n) {
  const MOD = 1234567;

  if (n <= 2) return n;

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    const current = (prev1 + prev2) % MOD;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
