function solution(n) {
  // 에라토스테네스의 체: 인덱스 = 숫자, 값 = 소수 여부
  const sieve = Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false; // 0과 1은 소수 아님

  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      // i의 배수를 모두 소수 아님으로 표시 (i² 부터 시작)
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.filter(Boolean).length;
}
// 1. 에라토스테네스의 체: 2~√n 범위의 소수 배수를 false로 제거
// 2. i² 부터 시작하는 이유 → i보다 작은 배수는 이미 이전 소수에서 처리됨
// 3. true로 남은 개수 = 1~n 사이의 소수 개수
