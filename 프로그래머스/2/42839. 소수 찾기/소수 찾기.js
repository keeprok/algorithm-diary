function solution(numbers) {
  const primes = new Set();
  const arr = numbers.split('');
  const visited = Array(arr.length).fill(false);

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function dfs(path) {
    if (path.length > 0) {
      const num = Number(path);
      if (isPrime(num)) primes.add(num);
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      dfs(path + arr[i]);
      visited[i] = false;
    }
  }

  dfs('');
  return primes.size;
}
// 1. numbers의 각 자리를 재배열해 만들 수 있는 모든 숫자를 탐색한다
// 2. 만들어진 숫자 중 유효하지 않은 값(예: 011 → 11과 동일)은 Number/Set으로 정리한다
// 3. 2 이상의 정수에 대해 소수 여부를 확인한다
// 4. 소수만 Set에 모은 뒤 Set.size를 반환한다
