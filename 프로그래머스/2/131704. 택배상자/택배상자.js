function solution(order) {
  const n = order.length;
  const stack = [];   // 보조 컨테이너 벨트 (LIFO)
  let main = 1;       // 메인 벨트에서 다음에 올 상자 번호
  let idx = 0;        // order에서 실어야 할 위치
  let count = 0;

  while (idx < n) {
    // 보조벨트 맨 위가 지금 실을 상자면 → 꺼내서 싣기
    if (stack.length && stack[stack.length - 1] === order[idx]) {
      stack.pop();
      idx++;
      count++;
    } else if (main <= n) {
      // 아니면 메인벨트 상자를 보조벨트에 올림
      stack.push(main);
      main++;
    } else {
      // 더 올릴 상자도 없고 top도 안 맞으면 중단
      break;
    }
  }

  return count;
}
// 1. 상자는 메인벨트에서 1,2,3... 순서로 나오고 보조벨트(스택)에 임시로 쌓을 수 있음
// 2. 스택 top이 지금 실어야 할 상자면 pop해서 싣고, 아니면 다음 메인 상자를 push
// 3. 둘 다 불가능해지는 순간까지 실은 상자 개수 반환 (스택 시뮬레이션)
