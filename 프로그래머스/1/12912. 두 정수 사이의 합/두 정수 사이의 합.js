function solution(a, b) {
  let x = Math.min(a, b);
  let y = Math.max(a, b);

  let sum = 0;
  for (let i = x; i <= y; i++) sum += i;
  return sum;
}
