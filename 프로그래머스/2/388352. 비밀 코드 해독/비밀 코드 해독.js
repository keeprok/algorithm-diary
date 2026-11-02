function solution(n, q, ans) {
  const combos = [];

  // 1~n 중 5개 조합 생성
  function dfs(start, cur) {
    if (cur.length === 5) {
      combos.push([...cur]);
      return;
    }
    for (let i = start; i <= n; i++) {
      cur.push(i);
      dfs(i + 1, cur);
      cur.pop();
    }
  }
  dfs(1, []);

  // 모든 질의의 일치 개수(ans)를 만족하는 조합만 카운트
  return combos.filter((code) =>
    q.every((query, i) => {
      const set = new Set(query);
      const hits = code.filter((x) => set.has(x)).length;
      return hits === ans[i];
    })
  ).length;
}
// 1. 비밀 코드는 1~n 중 서로 다른 5개 → C(n,5) 완전탐색 (n≤30이면 약 14만)
// 2. 각 질의한 5개와 겹치는 개수가 ans와 같아야 함
// 3. 모든 질의를 통과한 조합 수가 정답
