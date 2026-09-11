function solution(n) {
  const MOD = 1234567;
  let a = 0; // F(0)
  let b = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, (a + b) % MOD];
  }

  return n === 0 ? 0 : b;
}
// 1. F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2) → 변수 2개로 갱신 (O(1) 공간)
// 2. 매 단계 MOD로 나눠 오버플로 방지 (합친 뒤 나머지)
// 3. n=0 예외 처리 후 F(n) 반환
