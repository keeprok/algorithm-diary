function solution(t, p) {
  let count = 0;
  const len = p.length;

  for (let i = 0; i <= t.length - len; i++) {
    const slice = t.slice(i, i + len);
    if (slice <= p) count++;
  }

  return count;
}