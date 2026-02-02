function solution(numbers) {
  let sum = 0;
  for (let i = 0; i <= 9; i++) sum += i;

  const used = numbers.reduce((a, b) => a + b, 0);
  return sum - used;
}
