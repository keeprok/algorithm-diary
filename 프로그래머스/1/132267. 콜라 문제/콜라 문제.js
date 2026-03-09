function solution(a, b, n) {
  let res = 0;

  while (n >= a) {
    const q = Math.floor(n / a);
    res += q * b;
    n = (n % a) + q * b;
  }

  return res;
}