function solution(s1, s2) {
  const set = new Set(s2);
  let cnt = 0;

  for (const x of s1) {
    if (set.has(x)) cnt++;
  }
  return cnt;
}
