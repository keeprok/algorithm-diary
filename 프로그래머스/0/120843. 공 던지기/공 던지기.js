function solution(numbers, k) {
  let idx = 0;

  for (let i = 1; i < k; i++) {
    idx = (idx + 2) % numbers.length;
  }

  return numbers[idx];
}
