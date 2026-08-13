function solution(park, routes) {
  const rows = park.length;
  const cols = park[0].length;
  let r, c;

  // 시작 위치(S) 찾기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (park[i][j] === 'S') { r = i; c = j; }
    }
  }

  const dir = { N: [-1, 0], S: [1, 0], E: [0, 1], W: [0, -1] };

  for (const route of routes) {
    const [d, n] = route.split(' ');
    const [dr, dc] = dir[d];
    const dist = Number(n);
    let blocked = false;

    // 중간 경로에 장애물(X)이나 공원 밖이 있는지 확인
    for (let i = 1; i <= dist; i++) {
      const nr = r + dr * i;
      const nc = c + dc * i;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || park[nr][nc] === 'X') {
        blocked = true;
        break;
      }
    }

    // 막히지 않으면 이동
    if (!blocked) { r += dr * dist; c += dc * dist; }
  }

  return [r, c];
}
// 1. 시작점 S를 찾아 초기 위치 설정
// 2. 각 명령마다 중간 경로를 1칸씩 확인 → 장애물·경계 있으면 명령 무시
// 3. 문제 없으면 최종 위치로 이동
