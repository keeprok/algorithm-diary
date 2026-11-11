function solution(numbers) {
  const primes = new Set();

  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const permute = (arr, current) => {
    if (current.length > 0) {
      const num = Number(current);
      if (isPrime(num)) primes.add(num);
    }
    for (let i = 0; i < arr.length; i++) {
      permute(
        arr.filter((_, idx) => idx !== i),
        current + arr[i]
      );
    }
  };

  permute(numbers.split(''), '');
  return primes.size;
}
// 1. 숫자 조각을 이어 붙여 만들 수 있는 모든 수를 DFS 순열로 생성
// 2. 소수이면 Set에 저장 (같은 수가 여러 경로로 나와도 한 번만)
// 3. Set 크기 = 만들 수 있는 소수의 개수
