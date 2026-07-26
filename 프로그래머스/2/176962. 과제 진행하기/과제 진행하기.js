function solution(plans) {
  // 시작 시간 기준 오름차순 정렬
  plans.sort((a, b) => {
    const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    return toMin(a[1]) - toMin(b[1]);
  });

  const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  const answer = [];
  const stack = []; // 중단된 과제 스택 [이름, 남은시간]

  for (let i = 0; i < plans.length; i++) {
    const [name, start, playtime] = plans[i];
    const duration = Number(playtime);
    // 다음 과제 시작까지 가용 시간 (마지막 과제면 무한)
    const available = i + 1 < plans.length
      ? toMin(plans[i + 1][1]) - toMin(start)
      : Infinity;

    if (duration <= available) {
      // 가용 시간 안에 완료 가능 → 완료 처리
      answer.push(name);
      // 남은 여유 시간으로 스택 위의 과제 이어 하기
      let leftTime = available - duration;
      while (stack.length && leftTime > 0) {
        const top = stack[stack.length - 1];
        if (top[1] <= leftTime) {
          leftTime -= top[1];
          answer.push(top[0]);
          stack.pop();
        } else {
          top[1] -= leftTime;
          break;
        }
      }
    } else {
      // 시간 부족 → 진행한 만큼 빼고 스택에 저장
      stack.push([name, duration - available]);
    }
  }

  // 스택에 남은 과제는 최근 중단 순으로 완료
  while (stack.length) answer.push(stack.pop()[0]);

  return answer;
}
// 1. 시작 시간 정렬 후 다음 과제 시작까지의 가용 시간으로 현재 과제 완료 여부 판단
// 2. 시간 부족 시 남은 시간을 스택에 저장, 여유 시간 생기면 스택 위부터 재개
