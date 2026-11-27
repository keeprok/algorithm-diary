function solution(info, edges) {
  const g = Array.from({ length: info.length }, () => []);
  for (const [p, c] of edges) g[p].push(c);

  let max = 0;

  function dfs(sheep, wolf, next) {
    max = Math.max(max, sheep);
    for (let i = 0; i < next.length; i++) {
      const node = next[i];
      const ns = sheep + (info[node] === 0 ? 1 : 0);
      const nw = wolf + (info[node] === 1 ? 1 : 0);
      if (nw >= ns) continue; // 늑대가 양 이상이면 전부 잡아먹힘
      const nxt = next.filter((_, idx) => idx !== i).concat(g[node]);
      dfs(ns, nw, nxt);
    }
  }

  dfs(0, 0, [0]);
  return max;
}
// 1. 노드≤17 → 방문 순열을 다 봐도 됨. 늑대≥양이면 가지치기하는 DFS
// 2. next는 "지금 갈 수 있는 노드" 집합. 한 칸 가면 그 자식들이 새로 열림
// 3. 양은 모을수록 유리하니, 실패한 경로를 되돌릴 필요 없이 최댓값만 갱신
