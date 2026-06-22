// 1. priorities를 [우선순위, 원래 인덱스] 형태로 바꿔 큐에 넣는다
// 2. 큐의 맨 앞 프로세스를 shift()로 꺼낸다
// 3. 큐 안에 현재 프로세스보다 우선순위가 높은 것이 있는지 확인한다
// 4. 더 높은 우선순위가 있으면 현재 프로세스는 실행하지 않고 큐 뒤로 다시 보낸다
// 5. 더 높은 우선순위가 없으면 현재 프로세스를 실행하고 count++ 한다
// 6. 실행한 프로세스의 원래 인덱스가 location이면 count return

function solution(priorities, location) {
  const queue = priorities.map((priority, index) => [priority, index]);
  let count = 0;

  while (queue.length) {
    const [priority, index] = queue.shift();
    const hasHigher = queue.some(([nextPriority]) => nextPriority > priority);

    if (hasHigher) {
      queue.push([priority, index]);
    } else {
      count++;

      if (index === location) {
        return count;
      }
    }
  }
}