function solution(N, number) {
  if (N === number) return 1;

  const dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(String(N).repeat(i))); // 5, 55, 555, ...
    for (let j = 1; j < i; j++) {
      for (const a of dp[j]) {
        for (const b of dp[i - j]) {
          dp[i].add(a + b);
          dp[i].add(a - b);
          dp[i].add(a * b);
          if (b !== 0) dp[i].add(Math.floor(a / b));
        }
      }
    }
    if (dp[i].has(number)) return i;
  }

  return -1;
}
// 1. N 사용 8번이 상한 → dp[i]=N을 i개 써서 만드는 수 집합. 8 넘으면 -1
// 2. i개를 쪼개 j + (i-j)로 사칙연산. Set이라 같은 값은 한 번만
// 3. 나눗셈은 정수 나눗셈. 55처럼 이어붙인 수도 i개 사용으로 포함
