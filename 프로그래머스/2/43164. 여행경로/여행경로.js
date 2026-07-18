function solution(tickets) {
  // 알파벳 순으로 정렬 → DFS에서 먼저 만나는 경로가 정답이 됨
  tickets.sort();
  const used = Array(tickets.length).fill(false);
  let answer = [];

  function dfs(airport, path) {
    // 모든 티켓을 다 썼으면 경로 저장 후 종료
    if (path.length === tickets.length + 1) {
      answer = path;
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i];
      // 현재 위치에서 출발하는 미사용 티켓만 선택
      if (from === airport && !used[i]) {
        used[i] = true;
        // 경로 완성되면 바로 true 반환 (백트래킹 중단)
        if (dfs(to, [...path, to])) return true;
        used[i] = false; // 실패 시 백트래킹
      }
    }
    return false;
  }

  dfs('ICN', ['ICN']);
  return answer;
}
// 1. 티켓을 정렬하면 DFS에서 알파벳 순 경로를 먼저 탐색하므로 첫 완성 경로가 정답
// 2. used 배열로 같은 티켓 중복 사용 방지, 막히면 백트래킹으로 되돌아감
