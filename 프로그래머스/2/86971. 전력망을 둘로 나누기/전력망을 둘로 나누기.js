// 1. wires를 하나씩 끊어본다
// 2. 끊은 전선을 제외하고 그래프를 다시 만든다
// 3. 1번 송전탑부터 DFS로 연결된 송전탑 개수를 센다
// 4. 한쪽 그룹 개수 = count, 다른 그룹 개수 = n - count
// 5. 두 그룹 차이 = Math.abs(count - (n - count))
// 6. 모든 전선을 끊어보며 차이의 최솟값을 answer에 저장한다
// 7. answer return

function solution(n, wires) {
  let answer = Infinity;

  function dfs(node, graph, visited) {
    visited[node] = true;
    let count = 1;

    for (const next of graph[node]) {
      if (!visited[next]) {
        count += dfs(next, graph, visited);
      }
    }

    return count;
  }

  for (let cut = 0; cut < wires.length; cut++) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < wires.length; i++) {
      if (i === cut) continue;

      const [a, b] = wires[i];
      graph[a].push(b);
      graph[b].push(a);
    }

    const visited = Array(n + 1).fill(false);
    const count = dfs(1, graph, visited);
    const diff = Math.abs(count - (n - count));

    answer = Math.min(answer, diff);
  }

  return answer;
}