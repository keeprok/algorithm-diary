function solution(jobs) {
  const n = jobs.length;
  jobs = jobs
    .map(([req, dur], i) => [req, dur, i])
    .sort((a, b) => a[0] - b[0]); // 요청 시각 순

  let time = 0;
  let idx = 0;
  let done = 0;
  let total = 0;
  const ready = []; // 현재 시각까지 도착한 작업 (소요시간 짧은 순)

  while (done < n) {
    while (idx < n && jobs[idx][0] <= time) {
      ready.push(jobs[idx++]);
      ready.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    }

    if (ready.length === 0) {
      time = jobs[idx][0]; // 대기 작업 없으면 다음 요청 시각으로 점프
      continue;
    }

    const [req, dur] = ready.shift();
    time += dur;
    total += time - req; // 요청부터 종료까지 대기 시간
    done++;
  }

  return Math.floor(total / n);
}
// 1. 현재 시각에 대기 중인 작업 중 소요 시간이 가장 짧은 것부터 처리 (SJF)
// 2. 대기 큐가 비면 시간을 다음 작업 요청 시각으로 이동
// 3. 각 작업의 (종료시각 - 요청시각) 평균의 소수 버림이 정답
