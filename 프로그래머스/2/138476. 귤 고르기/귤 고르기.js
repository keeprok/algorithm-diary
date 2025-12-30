function solution(k, tangerine) {
  const map = new Map();

  for (const x of tangerine) {
    map.set(x, (map.get(x) || 0) + 1);
  }

  const cnts = [...map.values()].sort((a, b) => b - a);

  let sum = 0;
  let kind = 0;

  for (const c of cnts) {
    sum += c;
    kind++;
    if (sum >= k) break;
  }

  return kind;
}
