function solution(jobs) {
  // 요청 시각 오름차순 정렬
  jobs.sort((a, b) => a[0] - b[0]);

  let time = 0;       // 현재 시각
  let totalWait = 0;
  let idx = 0;
  const ready = [];   // 처리 대기 중인 작업 [요청시각, 처리시간]

  while (idx < jobs.length || ready.length > 0) {
    // 현재 시각까지 요청된 작업을 모두 ready에 추가
    while (idx < jobs.length && jobs[idx][0] <= time) {
      ready.push(jobs[idx++]);
    }

    if (ready.length === 0) {
      // 처리 가능한 작업 없으면 다음 요청 시각으로 이동
      time = jobs[idx][0];
      continue;
    }

    // SJF: 처리 시간이 가장 짧은 작업 먼저 (그리디)
    ready.sort((a, b) => a[1] - b[1]);
    const [reqTime, duration] = ready.shift();

    time += duration;               // 작업 완료 시각 갱신
    totalWait += time - reqTime;    // 요청 시각 ~ 완료 시각 = 총 대기 시간 누적
  }

  return Math.floor(totalWait / jobs.length);
}
// 1. SJF(Shortest Job First): 현재 처리 가능한 작업 중 처리 시간이 짧은 것 먼저 → 평균 대기 최소화
// 2. 처리할 작업이 없으면 다음 요청 시각으로 점프 (유휴 시간 처리)
// 3. 총 대기 시간(요청~완료) 합 / 작업 수 = 평균 대기 시간
