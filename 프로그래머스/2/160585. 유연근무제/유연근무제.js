function solution(schedules, timelogs, startday) {
  // HHMM 정수를 분 단위로 변환
  const toMin = (t) => Math.floor(t / 100) * 60 + (t % 100);

  let reward = 0;

  for (let i = 0; i < schedules.length; i++) {
    const allowed = toMin(schedules[i]) + 10; // 10분까지 지각 허용
    let onTime = true;

    for (let d = 0; d < 7; d++) {
      const weekday = ((startday - 1 + d) % 7) + 1; // 1~7 요일
      if (weekday === 6 || weekday === 7) continue;  // 토(6)·일(7) 제외

      if (toMin(timelogs[i][d]) > allowed) { // 하루라도 지각하면 탈락
        onTime = false;
        break;
      }
    }

    if (onTime) reward++;
  }

  return reward;
}
// 1. 출근 시각 + 10분이 각 직원의 허용 시각 (분 단위로 비교)
// 2. startday부터 7일을 돌되 주말(토=6,일=7)은 건너뜀
// 3. 평일에 한 번도 지각 안 한 직원 수가 상품 대상
