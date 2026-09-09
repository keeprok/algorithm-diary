function solution(book_time) {
  // "HH:MM" → 분 단위 정수로 변환
  const toMin = (t) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  // 체크아웃 후 청소 10분 포함해 [입실, 퇴실+10] 구간 생성
  const events = [];
  for (const [start, end] of book_time) {
    events.push([toMin(start), 1]);       // 입실 → 방 +1
    events.push([toMin(end) + 10, -1]);   // 퇴실+청소 → 방 -1
  }

  // 시각 순 정렬, 같은 시각이면 퇴실(-1)을 먼저 처리해야 방 재사용 가능
  events.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));

  let rooms = 0;
  let answer = 0;
  for (const [, delta] of events) {
    rooms += delta;
    answer = Math.max(answer, rooms); // 동시에 사용된 최대 방 수 = 필요한 방 개수
  }

  return answer;
}
// 1. 입실/퇴실을 이벤트로 분해 → 퇴실 시각에는 청소 10분을 더해 구간 확장
// 2. 시각순 정렬 (동시각이면 퇴실 먼저 → 방을 비운 뒤 새 입실 배정)
// 3. 이벤트 순회하며 동시에 겹치는 최댓값 = 최소 필요한 방 개수
