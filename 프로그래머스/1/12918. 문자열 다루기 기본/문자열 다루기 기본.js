function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (const ch of s) {
    if (ch < '0' || ch > '9') return false;
  }
  return true;
}