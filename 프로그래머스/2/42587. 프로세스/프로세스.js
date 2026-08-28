function solution(priorities, location) {
  // [우선순위, 원래 인덱스] 형태로 큐 구성
  const queue = priorities.map((p, i) => [p, i]);
  let count = 0;

  while (queue.length) {
    const [priority, idx] = queue.shift();

    // 뒤에 더 높은 우선순위가 있으면 현재 프로세스를 큐 맨 뒤로 이동
    if (queue.some(([p]) => p > priority)) {
      queue.push([priority, idx]);
    } else {
      // 가장 높은 우선순위 → 실행
      count++;
      if (idx === location) return count;
    }
  }
}
// 1. 큐 앞에서 꺼낸 프로세스보다 높은 우선순위가 남아있으면 뒤로 재삽입
// 2. 없으면 바로 실행 → count++ 후 목표 인덱스면 순서 반환
// 3. 인덱스를 함께 들고 다니며 원래 위치 추적
