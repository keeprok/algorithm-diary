function solution(n, vertex) {
  const g = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of vertex) {
    g[a].push(b);
    g[b].push(a);
  }

  const dist = Array(n + 1).fill(-1);
  const q = [1];
  dist[1] = 0;
  let head = 0;
  let max = 0;

  while (head < q.length) {
    const cur = q[head++];
    for (const nxt of g[cur]) {
      if (dist[nxt] !== -1) continue;
      dist[nxt] = dist[cur] + 1;
      max = Math.max(max, dist[nxt]);
      q.push(nxt);
    }
  }

  return dist.filter((d) => d === max).length;
}
// 1. n≤2e4, 간선≤5e4, 가중치 1 → 인접리스트 BFS O(N+E). 인접행렬·다익스트라 불필요
// 2. 방문은 큐에 넣는 순간 (같은 거리가 여러 번 들어가지 않게)
// 3. 1번에서 최단거리가 최대인 노드 개수가 답
