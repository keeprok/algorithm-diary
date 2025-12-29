function solution(d, budget) {
  d.sort((a, b) => a - b);

  let sum = 0;
  let cnt = 0;

  for (const x of d) {
    if (sum + x > budget) break;
    sum += x;
    cnt++;
  }

  return cnt;
}
