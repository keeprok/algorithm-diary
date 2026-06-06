function solution(maps) {
  // 1. (0,0)에서 BFS 시작 (최단 칸 수 = 출발 칸 포함이므로 시작 칸수는 1)
  const n = maps.length;
  const m = maps[0].length;
  const queue = [[0, 0, 1]]; // [행, 열, 지금까지 밟은 칸 수]
  let head = 0; // 큐에서 꺼낼 위치 (먼저 넣은 칸부터 처리)

  const dx = [1, -1, 0, 0]; // 아래, 위, 0, 0
  const dy = [0, 0, 1, -1]; // 0, 0, 오른쪽, 왼쪽

  // 2. 큐에서 칸을 하나 꺼내서, 도착지면 그때의 칸 수를 답으로 반환
  while (head < queue.length) {
    const [x, y, dist] = queue[head++];

    if (x === n - 1 && y === m - 1) return dist;

    // 3. 상하좌우 이웃 칸을 확인한다
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 4. 맵 밖이 아니고, 벽(0)이 아닌 길(1)만 큐에 넣는다
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1
      ) {
        // 5. 방문 처리(다시 안 들어오게) 후, 한 칸 더 간 칸 수로 큐에 추가
        maps[nx][ny] = 0;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  // 6. 큐를 다 돌았는데도 도착 못 했으면 -1
  return -1;
}
// 1. (0,0)부터 BFS로 퍼뜨린다 (큐 사용, 출발 칸 포함 칸 수 1)
// 2. 큐에서 칸을 꺼낼 때마다 도착지인지 확인하고, 도착이면 그 칸 수가 최단 답
// 3. 현재 칸의 상하좌우 이웃을 본다
// 4. 맵 밖이 아니고 길(1)인 칸만 다음 후보로 선택한다
// 5. 선택한 칸은 방문 처리(0)하고 큐에 (칸 수 + 1)로 넣는다
// 6. 끝까지 못 가면 -1을 반환한다
