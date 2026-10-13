function solution(board) {
  const n = board.length;
  const m = board[0].length;
  const grid = board.map(row => row.split(''));

  // 시작(R), 목표(G) 좌표 찾기
  let sr, sc, gr, gc;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 'R') { sr = i; sc = j; }
      if (grid[i][j] === 'G') { gr = i; gc = j; }
    }
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const queue = [[sr, sc, 0]];
  visited[sr][sc] = true;

  while (queue.length) {
    const [r, c, dist] = queue.shift();
    if (r === gr && c === gc) return dist;

    for (let d = 0; d < 4; d++) {
      // 벽(D)이나 경계에 막힐 때까지 미끄러짐
      let cr = r, cc = c;
      while (true) {
        const tr = cr + dx[d];
        const tc = cc + dy[d];
        if (tr < 0 || tr >= n || tc < 0 || tc >= m || grid[tr][tc] === 'D') break;
        cr = tr; cc = tc;
      }

      if (!visited[cr][cc]) {
        visited[cr][cc] = true;
        queue.push([cr, cc, dist + 1]);
      }
    }
  }

  return -1;
}
// 1. 로봇은 한 번 움직이면 벽/경계에 막힐 때까지 미끄러짐 → 도착 지점이 하나의 "노드"
// 2. BFS로 미끄러진 끝 좌표를 큐에 넣으며 최소 이동 횟수 탐색
// 3. 목표 도달 시 거리 반환, 끝까지 못 가면 -1
