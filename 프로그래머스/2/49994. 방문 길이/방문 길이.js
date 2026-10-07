function solution(dirs) {
  const move = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  let x = 0, y = 0;
  const visited = new Set(); // 지나간 "간선"을 저장 (양방향 동일 처리)

  for (const d of dirs) {
    const [dx, dy] = move[d];
    const nx = x + dx;
    const ny = y + dy;

    // 좌표 범위(-5 ~ 5) 벗어나면 이동 무시
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    // 간선을 양방향 모두 저장 (A→B 와 B→A 는 같은 길)
    visited.add(`${x},${y},${nx},${ny}`);
    visited.add(`${nx},${ny},${x},${y}`);

    x = nx;
    y = ny;
  }

  // 양방향 2개씩 저장했으므로 절반이 실제 길 개수
  return visited.size / 2;
}
// 1. 명령마다 좌표 이동하되, 격자(-5~5)를 벗어나면 그 이동은 무시
// 2. 처음 걸어본 "길(간선)"만 세야 하므로 Set에 간선을 저장
// 3. A→B와 B→A는 같은 길이라 양방향 저장 후 size/2 가 정답
