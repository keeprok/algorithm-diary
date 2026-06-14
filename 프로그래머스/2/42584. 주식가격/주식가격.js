// 1. 스택에 아직 가격이 떨어지지 않은 날의 인덱스를 넣는다
// 2. 현재 가격이 스택 top보다 작아지면 → top 인덱스의 답 = 지금 인덱스 - top 인덱스
// 3. 끝까지 가격이 안 떨어진 인덱스는 prices.length - 인덱스 - 1

function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = []; // 가격이 떨어지지 않은 날의 인덱스

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const idx = stack.pop();
      answer[idx] = i - idx;
    }
    stack.push(i);
  }

  while (stack.length) {
    const idx = stack.pop();
    answer[idx] = prices.length - idx - 1;
  }

  return answer;
}
