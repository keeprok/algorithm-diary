// 1. 문자열 s를 앞에서부터 하나씩 확인한다
// 2. stack의 마지막 문자와 현재 문자가 같으면 짝이 완성된 것
// 3. 짝이 완성되면 stack.pop()으로 마지막 문자를 제거한다
// 4. 같지 않으면 현재 문자를 stack에 push한다
// 5. 끝까지 처리했을 때 stack이 비어 있으면 전부 제거된 것이므로 1 return
// 6. stack에 문자가 남아 있으면 제거 실패이므로 0 return

function solution(s) {
  const stack = [];

  for (const ch of s) {
    const last = stack[stack.length - 1];

    if (last === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
