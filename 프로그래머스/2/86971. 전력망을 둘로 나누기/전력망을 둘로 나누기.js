function solution(n, wires) {
  let answer = Infinity;

  // 전선을 하나씩 끊어보며 두 트리의 노드 수 차이를 최소화
  for (let skip = 0; skip < wires.length; skip++) {
    // skip번째 전선을 제외하고 인접 리스트 구성
    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([a, b], i) => {
      if (i === skip) return; // 이 전선은 끊음
      graph[a].push(b);
      graph[b].push(a);
    });

    // 1번 노드에서 DFS → 한쪽 그룹의 노드 수 카운트
    const visited = Array(n + 1).fill(false);
    let count = 0;
    const stack = [1];
    visited[1] = true;
    while (stack.length) {
      const cur = stack.pop();
      count++;
      for (const next of graph[cur]) {
        if (!visited[next]) {
          visited[next] = true;
          stack.push(next);
        }
      }
    }

    // 한쪽이 count, 다른 쪽은 n - count → 차이의 최솟값
    answer = Math.min(answer, Math.abs(count - (n - count)));
  }

  return answer;
}
// 1. 트리에서 전선 1개를 끊으면 반드시 두 덩어리로 나뉨
// 2. 전선을 하나씩 끊어보고, 한쪽을 DFS로 세면 다른 쪽은 n - count
// 3. 두 덩어리 노드 수 차이의 최솟값이 정답 (완전탐색 + DFS)
