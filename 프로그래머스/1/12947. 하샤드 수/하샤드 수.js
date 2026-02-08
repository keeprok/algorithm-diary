function solution(x) {
  let sum = 0;
  for (const ch of String(x)) {
    sum += Number(ch);
  }
  return x % sum === 0;
}
