function solution(arr) {
  const stack = [];

  for (const x of arr) {
    if (stack.length === 0 || stack[stack.length - 1] !== x) {
      stack.push(x);
    }
  }

  return stack;
}
