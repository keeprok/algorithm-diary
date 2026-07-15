function solution(s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      // '(' 를 만나면 스택에 push
      stack.push(c);
    } else {
      // ')' 를 만났는데 스택이 비어있으면 짝 없는 닫는 괄호 → false
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  // 순회 후 스택이 비어있어야 모든 괄호가 짝을 이룬 것
  return stack.length === 0;
}
// 1. 여는 괄호는 스택에 쌓고, 닫는 괄호가 나오면 짝을 맞춰 pop
// 2. 순회 중 스택이 비는데 ')' 가 나오거나, 끝났는데 스택이 남으면 false
