function solution(numbers) {
  const primes = new Set();

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // 남은 숫자 배열과 현재까지 만든 문자열로 DFS 순열 탐색
  function permute(arr, current) {
    if (current.length > 0) {
      const num = Number(current);
      if (isPrime(num)) primes.add(num); // 소수이면 Set에 추가 (중복 자동 제거)
    }
    for (let i = 0; i < arr.length; i++) {
      permute(
        arr.filter((_, idx) => idx !== i), // i번째 제외한 나머지
        current + arr[i]
      );
    }
  }

  permute(numbers.split(''), '');
  return primes.size;
}
// 1. 숫자 문자열을 배열로 쪼개 DFS 순열 탐색 → 가능한 모든 수 생성
// 2. 각 수가 소수이면 Set에 저장 (같은 수가 여러 방법으로 만들어질 수 있어 중복 제거)
// 3. Set 크기 = 만들 수 있는 소수의 개수
