function solution(info, n, m) {
  const INF = 1e9;
  // dp[b] = B의 흔적이 b일 때 A 흔적의 최솟값
  let dp = Array(m).fill(INF);
  dp[0] = 0;

  for (const [a, b] of info) {
    const next = Array(m).fill(INF);
    for (let bb = 0; bb < m; bb++) {
      if (dp[bb] === INF) continue;
      // 이 물건을 A가 훔침
      if (dp[bb] + a < n) next[bb] = Math.min(next[bb], dp[bb] + a);
      // 이 물건을 B가 훔침
      if (bb + b < m) next[bb + b] = Math.min(next[bb + b], dp[bb]);
    }
    dp = next;
  }

  const minA = Math.min(...dp);
  return minA === INF ? -1 : minA;
}
// 1. 물건마다 A 또는 B가 반드시 훔침 (둘 다 안 훔칠 수 없음)
// 2. A 흔적 ≥ n 또는 B 흔적 ≥ m 이면 잡힘 → 그 미만만 DP에 유지
// 3. B 흔적을 인덱스로, A 흔적 최솟값을 저장 → 불가능하면 -1
