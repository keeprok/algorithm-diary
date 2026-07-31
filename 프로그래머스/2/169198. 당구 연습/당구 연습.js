function solution(m, n, startX, startY, balls) {
  // 목표 공을 맞추는 최단 거리: 벽 반사를 대칭 이동으로 처리
  // 4방향 대칭점까지의 거리 중 유효한 최솟값 선택

  function dist(x1, y1, x2, y2) {
    return (x2 - x1) ** 2 + (y2 - y1) ** 2; // 제곱 거리 (sqrt 생략)
  }

  return balls.map(([bx, by]) => {
    const candidates = [];

    // 상하 벽 반사 대칭점
    const top = dist(startX, startY, bx, 2 * n - by);    // 위 벽 반사
    const bottom = dist(startX, startY, bx, -by);          // 아래 벽 반사
    // 좌우 벽 반사 대칭점
    const right = dist(startX, startY, 2 * m - bx, by);  // 오른쪽 벽 반사
    const left = dist(startX, startY, -bx, by);            // 왼쪽 벽 반사

    // 같은 열/행 예외: 반사 경로가 목표 공을 통과하면 무효
    if (startX !== bx) candidates.push(top, bottom);
    else {
      if (startY < by) candidates.push(top);   // 목표가 위에 있을 때만 위 반사 유효
      else candidates.push(bottom);
    }
    if (startY !== by) candidates.push(left, right);
    else {
      if (startX < bx) candidates.push(right);
      else candidates.push(left);
    }

    return Math.sqrt(Math.min(...candidates));
  });
}
// 1. 벽 반사를 대칭 이동으로 변환 → 직선 거리 계산으로 단순화
// 2. 같은 행/열일 때 큐볼이 목표 공을 직접 통과하는 경로 제외
