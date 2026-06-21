// 1. ingredient를 앞에서부터 하나씩 stack에 넣는다
// 2. stack의 마지막 4개가 [1, 2, 3, 1]인지 확인한다
//    - 1: 빵, 2: 야채, 3: 고기, 1: 빵
// 3. 햄버거 순서가 완성되면 stack에서 4개를 pop으로 제거한다
// 4. 제거할 때마다 answer++ 한다
// 5. 끝까지 돌고 만든 햄버거 개수 answer를 return

function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (const item of ingredient) {
    stack.push(item);

    const len = stack.length;
    if (
      len >= 4 &&
      stack[len - 4] === 1 &&
      stack[len - 3] === 2 &&
      stack[len - 2] === 3 &&
      stack[len - 1] === 1
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      answer++;
    }
  }

  return answer;
}
