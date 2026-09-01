function solution(prices) {
  const answer = Array(prices.length).fill(0);
  const stack = []; // 아직 가격이 떨어지지 않은 시점의 인덱스

  for (let i = 0; i < prices.length; i++) {
    // 현재 가격이 스택 top보다 낮으면 → top 시점의 가격이 드디어 떨어진 것
    while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
      const idx = stack.pop();
      answer[idx] = i - idx; // 버틴 기간 = 현재 인덱스 - 그 시점 인덱스
    }
    stack.push(i);
  }

  // 스택에 남은 인덱스 → 끝까지 가격이 떨어지지 않은 시점
  while (stack.length) {
    const idx = stack.pop();
    answer[idx] = prices.length - 1 - idx;
  }

  return answer;
}
// 1. 스택에 인덱스를 쌓다가 현재 가격이 더 낮으면 스택 top이 "이제 떨어진" 시점
// 2. answer[idx] = i - idx (해당 가격이 버틴 기간)
// 3. 순회 후 스택에 남은 건 마지막까지 안 떨어진 것 → (끝 인덱스 - 해당 인덱스)
