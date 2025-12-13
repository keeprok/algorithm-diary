function solution(s) {
  const n = s.length;
  const pair = { ')': '(', '}': '{', ']': '[' };
  const opens = new Set(['(', '{', '[']);

  function isValid(str) {
    const stack = [];
    for (const ch of str) {
      if (opens.has(ch)) {
        stack.push(ch);
      } else {
        if (stack.length === 0) return false;
        const top = stack[stack.length - 1];
        if (top !== pair[ch]) return false;
        stack.pop();
      }
    }
    return stack.length === 0;
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) answer++;
  }

  return answer;
}
