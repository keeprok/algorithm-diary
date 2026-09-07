function solution(N, road, K) {
  // 양방향 인접 리스트 구성
  const graph = Array.from({ length: N + 1 }, () => []);
  for (const [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]); // 양방향
  }

  // 다익스트라: 1번 마을에서 각 마을까지 최단 시간
  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;
  const pq = [[0, 1]]; // [거리, 노드]

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]); // 최소 거리 우선 (간단 구현)
    const [d, u] = pq.shift();

    if (d > dist[u]) continue; // 이미 더 짧은 경로로 처리된 노드

    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        pq.push([dist[v], v]);
      }
    }
  }

  // K 이하인 마을 수 (1번 인덱스부터 카운트)
  return dist.slice(1).filter(d => d <= K).length;
}
// 1. 다익스트라: 1번 마을 출발, 최솟값 먼저 꺼내며 최단 거리 갱신
// 2. 이미 처리된 노드(d > dist[u])는 skip → 중복 처리 방지
// 3. 최단 거리 ≤ K 인 마을 수 반환
