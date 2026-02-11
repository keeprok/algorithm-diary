function solution(n) {
  let sum = 0;
  for (const ch of String(n)) sum += Number(ch);
  return sum;
}
