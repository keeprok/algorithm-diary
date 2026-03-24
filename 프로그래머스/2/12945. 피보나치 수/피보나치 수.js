function solution(n) {
  const MOD = 1234567;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = (a + b) % MOD;
    a = b;
    b = temp;
  }

  return b;
}