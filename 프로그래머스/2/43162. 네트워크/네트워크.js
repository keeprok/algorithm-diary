function solution(n, computers) {
  const visited = Array(n).fill(false);
  let answer = 0;

  function dfs(node) {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      // 연결되어 있고 아직 방문 안 한 컴퓨터만 탐색
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // 아직 방문 안 한 컴퓨터 → 새 네트워크 발견
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
// 1. 방문 안 한 노드에서 DFS 시작 → 연결된 모든 노드 방문 처리
// 2. DFS 한 번 완료될 때마다 독립된 네트워크 1개 → answer++
