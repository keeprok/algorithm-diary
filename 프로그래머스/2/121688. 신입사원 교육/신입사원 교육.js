function solution(ability, number) {
  const h = ability.slice();

  const down = (i) => {
    const n = h.length;
    while (true) {
      let s = i;
      const l = i * 2 + 1;
      const r = l + 1;
      if (l < n && h[l] < h[s]) s = l;
      if (r < n && h[r] < h[s]) s = r;
      if (s === i) break;
      [h[i], h[s]] = [h[s], h[i]];
      i = s;
    }
  };
  const push = (v) => {
    h.push(v);
    let i = h.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p] <= h[i]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  };
  const pop = () => {
    const min = h[0];
    const last = h.pop();
    if (h.length) {
      h[0] = last;
      down(0);
    }
    return min;
  };

  for (let i = (h.length >> 1) - 1; i >= 0; i--) down(i);

  for (let i = 0; i < number; i++) {
    const s = pop() + pop();
    push(s);
    push(s);
  }

  return h.reduce((a, b) => a + b, 0);
}
// 1. ability≤1e6, number≤1e4 → 매번 sort는 TLE, 최소힙 O(N + K log N)
// 2. 합을 최소로 하려면 가장 작은 둘을 골라야 함 (큰 값을 키우면 합이 더 커짐)
// 3. 둘을 꺼낸 뒤 a+b를 두 번 push → 두 사람 능력치가 합으로 바뀜
