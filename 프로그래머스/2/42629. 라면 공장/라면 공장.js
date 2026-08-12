function solution(stock, dates, supplies, k) {
  let day = stock; // 현재 재고로 버틸 수 있는 마지막 날
  let answer = 0;
  let idx = 0;
  const heap = []; // 사용 가능한 보충량 후보 (내림차순 정렬)

  while (day < k) {
    // 현재까지 도달 가능한 날의 보충량을 모두 후보에 추가
    while (idx < dates.length && dates[idx] <= day) {
      heap.push(supplies[idx++]);
    }

    // 가장 많은 보충량 선택 → 최소 횟수로 k일까지 버팀 (그리디)
    heap.sort((a, b) => b - a);
    day += heap.shift();
    answer++;
  }

  return answer;
}
// 1. 재고가 바닥나기 전(day일)까지 도달 가능한 보충 지점을 힙(배열)에 추가
// 2. 힙에서 가장 많은 보충량 선택 → 한 번에 최대한 늘려야 총 횟수가 최소
// 3. day가 k 이상이 될 때까지 반복
