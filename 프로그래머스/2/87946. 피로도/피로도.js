function solution(k, dungeons) {
  const n = dungeons.length;
  const used = Array(n).fill(false);
  let answer = 0;

  // 던전을 방문하는 모든 순서(순열)를 완전탐색
  function dfs(current, fatigue) {
    answer = Math.max(answer, current); // 지금까지 방문한 던전 수 갱신

    for (let i = 0; i < n; i++) {
      const [need, cost] = dungeons[i];
      // 아직 안 간 던전이고, 최소 필요 피로도를 만족하면 방문 가능
      if (!used[i] && fatigue >= need) {
        used[i] = true;
        dfs(current + 1, fatigue - cost); // 방문 후 피로도 차감
        used[i] = false; // 백트래킹: 원상복구
      }
    }
  }

  dfs(0, k);
  return answer;
}
// 1. 던전 개수 ≤ 8 → 8! = 40320 → 모든 방문 순서를 완전탐색(순열) 가능
// 2. "최소 필요 피로도 ≤ 현재 피로도"면 방문, 방문 후 소모 피로도 차감
// 3. 백트래킹으로 used를 되돌리며 모든 순서 탐색, 최대 방문 수 반환
