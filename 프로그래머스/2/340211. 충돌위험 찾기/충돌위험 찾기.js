function solution(points, routes) {
  // 포인트 번호(1-based) → 좌표
  const pos = [null, ...points];

  // from → to 최단경로 (r을 먼저 맞춘 뒤 c)
  const path = (from, to) => {
    const steps = [];
    let [r, c] = from;
    const [tr, tc] = to;
    while (r !== tr) { r += r < tr ? 1 : -1; steps.push([r, c]); }
    while (c !== tc) { c += c < tc ? 1 : -1; steps.push([r, c]); }
    return steps;
  };

  // 로봇별 전체 이동 좌표 타임라인 (시간 0 = 출발점 포함)
  const timelines = routes.map((route) => {
    const seq = [pos[route[0]]];
    for (let i = 1; i < route.length; i++) {
      seq.push(...path(pos[route[i - 1]], pos[route[i]]));
    }
    return seq;
  });

  const maxT = Math.max(...timelines.map((t) => t.length));
  let danger = 0;

  for (let t = 0; t < maxT; t++) {
    const cnt = new Map();
    for (const seq of timelines) {
      if (t >= seq.length) continue; // 이미 도착한 로봇은 제외
      const key = seq[t].join(',');
      cnt.set(key, (cnt.get(key) || 0) + 1);
    }
    for (const v of cnt.values()) {
      if (v >= 2) danger++; // (시간, 좌표)당 1회
    }
  }

  return danger;
}
// 1. 로봇은 r좌표를 먼저, 그다음 c좌표를 맞춰 최단경로 이동
// 2. 같은 시간에 같은 칸에 2대 이상이면 위험 상황 1회
// 3. 도착 후엔 사라지므로 타임라인 길이를 넘긴 로봇은 카운트하지 않음
