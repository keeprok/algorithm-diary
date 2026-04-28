function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [a, b, cost] of road) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;

  const queue = [[1, 0]];

  while (queue.length) {
    queue.sort((a, b) => a[1] - b[1]);
    const [cur, curCost] = queue.shift();

    if (curCost > dist[cur]) continue;

    for (const [next, cost] of graph[cur]) {
      const newCost = curCost + cost;

      if (newCost < dist[next]) {
        dist[next] = newCost;
        queue.push([next, newCost]);
      }
    }
  }

  return dist.filter((d) => d <= K).length;
}