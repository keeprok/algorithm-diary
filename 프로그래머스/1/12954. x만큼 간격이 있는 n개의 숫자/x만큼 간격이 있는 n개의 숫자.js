function solution(x, n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(x * i);
  }
  return res;
}
