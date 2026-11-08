function solution(schedules, timelogs, startday) {
  const toMin = (t) => Math.floor(t / 100) * 60 + (t % 100);

  let reward = 0;

  for (let i = 0; i < schedules.length; i++) {
    const allowed = toMin(schedules[i]) + 10; // 희망 시각 + 10분
    let onTime = true;

    for (let d = 0; d < 7; d++) {
      const weekday = ((startday - 1 + d) % 7) + 1; // 1=월 … 7=일
      if (weekday >= 6) continue; // 토·일은 이벤트 제외

      if (toMin(timelogs[i][d]) > allowed) {
        onTime = false;
        break;
      }
    }
    if (onTime) reward++;
  }

  return reward;
}
// 1. HHMM을 분으로 바꿔 비교 (850+20=910이지 870이 아님)
// 2. startday부터 7일 중 평일만 출근 시각 검사
// 3. 평일에 한 번도 지각하지 않은 직원 수 반환
