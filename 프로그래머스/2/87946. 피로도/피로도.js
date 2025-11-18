function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = Array(n).fill(false);
  let answer = 0;

  // remain: 남은 피로도
  // count: 지금까지 클리어한 던전 수
  function dfs(remain, count) {
    // 여기까지 온 경로에서 최대 개수 갱신
    if (count > answer) {
      answer = count;
    }

    // 다음에 갈 던전 하나씩 선택해 보기
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue; // 이미 간 던전이면 패스

      const [need, use] = dungeons[i];

      // 최소 필요 피로도보다 작으면 이 던전 못 감
      if (remain < need) continue;

      // i번 던전에 들어간다고 가정
      visited[i] = true;
      dfs(remain - use, count + 1); // 피로도 줄이고, 개수 +1
      visited[i] = false; // 백트래킹: 다른 경우의 수를 위해 되돌리기
    }
  }

  // 시작: 초기 피로도 k, 아직 0개 탐험
  dfs(k, 0);

  return answer;
}
