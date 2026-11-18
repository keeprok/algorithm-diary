function solution(ability) {
  const n = ability.length; // 학생 수
  const m = ability[0].length; // 종목 수
  const used = Array(n).fill(false);
  let maxSum = 0;

  function dfs(sport, sum) {
    if (sport === m) {
      maxSum = Math.max(maxSum, sum);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      used[i] = true;
      dfs(sport + 1, sum + ability[i][sport]);
      used[i] = false;
    }
  }

  dfs(0, 0);
  return maxSum;
}
// 1. 학생≤10, 종목≤10 → P(10,10)=10! ≈ 360만, DFS 순열로 충분
// 2. 종목마다 아직 안 쓴 학생 1명을 배정 (한 학생은 한 종목만)
// 3. used를 넣고 재귀 → 빠져나오며 false로 복구 (백트래킹)
