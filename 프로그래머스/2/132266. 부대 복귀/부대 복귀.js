function solution(n, roads, sources, destination) {
  // 양방향 인접 리스트 구성
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // destination에서 역방향으로 BFS 1번 → 모든 지점까지의 최단 거리
  const dist = Array(n + 1).fill(-1);
  dist[destination] = 0;
  const queue = [destination];

  while (queue.length) {
    const cur = queue.shift();
    for (const next of graph[cur]) {
      if (dist[next] === -1) {
        dist[next] = dist[cur] + 1;
        queue.push(next);
      }
    }
  }

  // 각 source의 최단 거리 반환 (도달 불가 = -1)
  return sources.map(s => dist[s]);
}
// 1. 각 source에서 BFS를 따로 수행하면 O(sources * (n+m)) → TLE
// 2. destination에서 역방향 BFS 단 한 번으로 O(n+m)에 모든 최단 거리 계산
// 3. 도달 불가능한 source는 dist값 그대로 -1 반환
