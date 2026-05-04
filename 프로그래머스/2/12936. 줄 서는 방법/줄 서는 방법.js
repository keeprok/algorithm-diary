function solution(n, k) {
  const result = [];
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  let factorial = 1;
  for (let i = 1; i < n; i++) factorial *= i;

  k--; // 0-based

  while (n > 0) {
    const idx = Math.floor(k / factorial);

    result.push(numbers[idx]);
    numbers.splice(idx, 1);

    k %= factorial;
    n--;

    factorial = Math.floor(factorial / n);
  }

  return result;
}
