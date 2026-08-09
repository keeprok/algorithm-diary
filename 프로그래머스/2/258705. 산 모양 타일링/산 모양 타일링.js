function solution(n) {
  const MOD = 10007;

  // f(i) = 위 삼각형 i개 + 아래 삼각형 (i-1)개인 산 모양의 타일링 경우의 수
  // g(i) = 위 삼각형 i개 + 아래 삼각형 i개인 확장 모양의 타일링 경우의 수
  //
  // 점화식:
  //   f(i) = 2*f(i-1) + g(i-2)  (위▲ 단독 or (▽▲) 마름모 or (▲▽) 마름모 후 단독)
  //   g(i) = f(i) + g(i-1)       (마지막 ▽ 단독이면 f(i), 마름모이면 g(i-1))
  // 기저값: f(1)=1, g(0)=1, g(1)=2

  if (n === 1) return 1;

  let prevF = 1;   // f(1)
  let prevG2 = 1;  // g(0)
  let prevG1 = 2;  // g(1)

  let f = prevF;
  for (let i = 2; i <= n; i++) {
    f = (2 * prevF + prevG2) % MOD;
    const g = (f + prevG1) % MOD;
    prevG2 = prevG1;
    prevG1 = g;
    prevF = f;
  }

  return f;
}
// 1. 타일: 단위 정삼각형(▲ or ▽) 또는 마름모(▲+▽ 인접 쌍)
// 2. f(n) = 2*f(n-1) + g(n-2), g(n) = f(n) + g(n-1) 두 상태 DP
// 3. 결과가 매우 크므로 10007로 나눈 나머지 반환
