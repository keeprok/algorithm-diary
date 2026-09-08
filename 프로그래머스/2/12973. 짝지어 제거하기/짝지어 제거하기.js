function solution(s) {
  const stack = [];

  for (const c of s) {
    // 스택 top과 같은 문자면 쌍이 완성 → 제거 (pop)
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  // 스택이 완전히 비었으면 모두 제거 성공
  return stack.length === 0 ? 1 : 0;
}
// 1. 문자를 하나씩 스택에 쌓되, top과 같으면 쌍으로 제거 (pop)
// 2. 끝까지 순회 후 스택이 비어있으면 1, 남아있으면 0
// 3. 문자열 길이 최대 100만 → indexOf로 반복 탐색 시 O(n²) → 스택으로 O(n) 해결
