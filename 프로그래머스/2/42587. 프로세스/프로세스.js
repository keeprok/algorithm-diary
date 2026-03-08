function solution(priorities, location) {
  const q = priorities.map((p, i) => [p, i]);
  let cnt = 0;

  while (q.length) {
    const [p, idx] = q.shift();
    const hasHigher = q.some(([pp]) => pp > p);

    if (hasHigher) q.push([p, idx]);
    else {
      cnt++;
      if (idx === location) return cnt;
    }
  }
}