function solution(s) {
  const n = s.length;
  const pairs = { ')': '(', ']': '[', '}': '{' };
  let answer = 0;

  // 올바른 괄호 문자열인지 스택으로 검사
  const isValid = (str) => {
    const stack = [];
    for (const ch of str) {
      if (ch === '(' || ch === '[' || ch === '{') {
        stack.push(ch);
      } else {
        // 닫는 괄호인데 짝이 안 맞으면 실패
        if (stack.pop() !== pairs[ch]) return false;
      }
    }
    return stack.length === 0; // 남은 여는 괄호가 없어야 성공
  };

  // n번 회전하며 각각 검사
  for (let i = 0; i < n; i++) {
    const rotated = s.slice(i) + s.slice(0, i); // i칸 왼쪽 회전
    if (isValid(rotated)) answer++;
  }

  return answer;
}
// 1. 스택으로 여는 괄호는 push, 닫는 괄호는 top과 짝이 맞으면 pop
// 2. 회전: s.slice(i) + s.slice(0, i) 로 왼쪽으로 i칸 돌린 문자열 생성
// 3. n가지 회전 각각 검사해 올바른 경우의 수를 카운트
