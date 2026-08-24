function solution(n, m, x, y, r, c, k) {
  const dist = Math.abs(r - x) + Math.abs(c - y);

  // 남은 거리보다 k가 작거나, 차이가 홀수면 도달 불가
  if (dist > k || (k - dist) % 2 !== 0) return 'impossible';

  let answer = '';
  let cx = x, cy = y;
  let remaining = k;

  // 사전순: d(아래) → l(왼쪽) → r(오른쪽) → u(위)
  const dirs = [['d', 1, 0], ['l', 0, -1], ['r', 0, 1], ['u', -1, 0]];

  while (remaining > 0) {
    for (const [dir, dx, dy] of dirs) {
      const nx = cx + dx;
      const ny = cy + dy;

      // 격자 밖이면 스킵
      if (nx < 1 || nx > n || ny < 1 || ny > m) continue;

      const newDist = Math.abs(r - nx) + Math.abs(c - ny);
      const left = remaining - 1;

      // 이 방향으로 이동 후 도착점에 도달 가능한지 판단
      if (newDist <= left && (left - newDist) % 2 === 0) {
        answer += dir;
        cx = nx;
        cy = ny;
        remaining--;
        break;
      }
    }
  }

  return answer;
}
// 1. 맨해튼 거리 > k 이거나 (k - 거리)가 홀수이면 "impossible"
//    → 도달 불가 또는 남은 짝수 이동을 소화할 수 없음
// 2. 사전순(d→l→r→u)으로 방향을 시도해 유효하면 선택 (greedy)
//    → 이동 후 남은 횟수로 도착점에 도달 가능 = (newDist <= left) && ((left - newDist) % 2 === 0)
// 3. k번을 모두 사용하면 경로 반환
