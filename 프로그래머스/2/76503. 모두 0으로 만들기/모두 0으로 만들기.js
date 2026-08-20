function solution(a, edges) {
  // 총합이 0이 아니면 모두 0으로 만드는 것이 불가능
  if (a.reduce((s, v) => s + v, 0) !== 0) return -1;

  const n = a.length;
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // BFS로 부모-자식 관계 및 처리 순서(탐색 순서) 확정
  const parent = Array(n).fill(-1);
  const order = [];
  const visited = Array(n).fill(false);
  const queue = [0];
  visited[0] = true;

  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        parent[next] = node;
        queue.push(next);
      }
    }
  }

  // 역순(리프 → 루트)으로 처리: 각 노드의 값을 부모로 전달
  const value = [...a];
  let answer = 0;

  for (let i = order.length - 1; i > 0; i--) {
    const node = order[i];
    const p = parent[node];
    answer += Math.abs(value[node]); // 이 노드에서 부모로 전달하는 연산 횟수
    value[p] += value[node];         // 부모에 값 누적
  }

  return answer;
}
// 1. 총합 != 0이면 -1 반환 (모든 노드를 0으로 만들 수 없음)
// 2. BFS로 트리 구조(부모-자식 관계) 확정
// 3. 리프부터 루트 순으로 각 노드 값을 부모로 전달 (전달량의 절댓값 = 연산 횟수)
//    → 전달량의 절댓값 합이 최소 연산 횟수
