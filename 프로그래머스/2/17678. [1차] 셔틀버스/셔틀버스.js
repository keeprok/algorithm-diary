function solution(n, t, m, timetable) {
  const toMin = (s) => +s.slice(0, 2) * 60 + +s.slice(3);
  const crew = timetable.map(toMin).sort((a, b) => a - b);
  let i = 0;
  let bus = 0;
  let boarded = 0;

  for (let k = 0; k < n; k++) {
    bus = 9 * 60 + k * t;
    boarded = 0;
    while (i < crew.length && crew[i] <= bus && boarded < m) {
      i++;
      boarded++;
    }
  }

  const latest = boarded < m ? bus : crew[i - 1] - 1;
  const hh = String(Math.floor(latest / 60)).padStart(2, '0');
  const mm = String(latest % 60).padStart(2, '0');
  return `${hh}:${mm}`;
}
// 1. n≤10, 크루≤2000 → 분으로 바꿔 정렬 후 시뮬레이션 O(N log N)
// 2. 앞차는 도착≤버스인 사람을 m명까지 태움. 콘은 같은 시각이면 맨 뒤
// 3. 막차에 자리 있으면 막차 시각, 없으면 m번째 탑승자보다 1분 일찍
