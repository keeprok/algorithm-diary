function solution(s) {
  const n = s.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}
