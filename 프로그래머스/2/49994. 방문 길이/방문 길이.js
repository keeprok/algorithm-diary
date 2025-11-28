function solution(dirs) {
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0]
  };

  let x = 0, y = 0; // 시작점
  const visited = new Set(); // 지나간 길 저장

  for (const d of dirs) {
    const [dx, dy] = move[d];
    const nx = x + dx;
    const ny = y + dy;

    // 범위 체크 (-5~5)
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
      continue; // 범위 밖이면 무시
    }

    // 길(양방향 동일) 만들기
    const path = `${x},${y}-${nx},${ny}`;
    const reverse = `${nx},${ny}-${x},${y}`;

    visited.add(path);
    visited.add(reverse);

    // 이동
    x = nx;
    y = ny;
  }

  // path + reverse 저장했으니까 절반이 진짜 길 개수
  return visited.size / 2;
}
