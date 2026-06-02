function solution(k, dungeons) {
  // 1. 던전 순서에 따라 최대 탐험 횟수가 달라지므로, 가능한 모든 순서를 DFS로 탐색
  let answer = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(cur, count) {
    // 4. 현재 경로의 탐험 횟수로 최대값 갱신
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [need, cost] = dungeons[i];

      // 3. 이미 방문한 던전은 제외
      if (visited[i]) continue;
      // 2. 현재 피로도로 입장 가능한 던전만 선택 (cur >= need)
      if (cur < need) continue;

      // 5. 던전 선택 -> 피로도 소모 후 다음 탐색 -> 방문 복구(백트래킹)
      visited[i] = true;
      dfs(cur - cost, count + 1);
      visited[i] = false;
    }
  }

  // 시작 상태: 초기 피로도 k, 탐험 횟수 0
  dfs(k, 0);
  return answer;
}
