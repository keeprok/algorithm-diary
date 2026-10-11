function solution(n, k) {
  // 팩토리얼 수 체계로 k번째 순열을 직접 계산 (n이 커서 BigInt 사용)
  const fact = [1n];
  for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i);

  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const answer = [];
  let idx = BigInt(k) - 1n; // 0-based

  for (let i = n; i >= 1; i--) {
    const f = fact[i - 1];          // 남은 (i-1)개로 만들 수 있는 순열 수
    const pos = Number(idx / f);    // 이번 자리에 올 숫자의 위치
    answer.push(numbers[pos]);
    numbers.splice(pos, 1);         // 사용한 숫자 제거
    idx %= f;                       // 나머지로 다음 자리 결정
  }

  return answer;
}
// 1. (i-1)! 단위로 앞자리 숫자를 결정 → 팩토리얼 진법 아이디어
// 2. pos = k / (i-1)! → 남은 숫자 중 pos번째를 선택, k는 나머지로 갱신
// 3. n이 20까지라 k가 20!≈2.4e18 → Number 범위 초과 가능 → BigInt 필수
