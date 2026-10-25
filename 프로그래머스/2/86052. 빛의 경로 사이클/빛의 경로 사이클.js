function solution(grid) {
  const n = grid.length;
  const m = grid[0].length;
  // 방향: 0=상, 1=우, 2=하, 3=좌
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  // 각 (행, 열, 방향) 상태의 방문 여부
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(4).fill(false))
  );

  const answer = [];

  for (let sr = 0; sr < n; sr++) {
    for (let sc = 0; sc < m; sc++) {
      for (let sd = 0; sd < 4; sd++) {
        if (visited[sr][sc][sd]) continue;

        // 이 상태에서 출발하는 사이클 추적
        let r = sr, c = sc, d = sd, length = 0;
        while (!visited[r][c][d]) {
          visited[r][c][d] = true;
          length++;

          // 현재 칸의 신호에 따라 방향 전환
          if (grid[r][c] === 'L') d = (d + 3) % 4;      // 좌회전
          else if (grid[r][c] === 'R') d = (d + 1) % 4; // 우회전

          // 이동 (격자를 벗어나면 반대편으로 순환)
          r = (r + dr[d] + n) % n;
          c = (c + dc[d] + m) % m;
        }

        answer.push(length);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
// 1. 상태 = (행, 열, 방향). 빛은 S는 직진, L은 좌회전, R은 우회전 후 이동
// 2. 격자 밖으로 나가면 반대편으로 순환 (% 연산)
// 3. 아직 방문 안 한 상태마다 사이클을 추적해 길이 저장 → 오름차순 정렬
