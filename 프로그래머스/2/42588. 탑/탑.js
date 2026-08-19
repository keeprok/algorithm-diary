function solution(heights) {
  const answer = Array(heights.length).fill(0);
  const stack = []; // 단조 감소 스택 (인덱스 저장)

  for (let i = 0; i < heights.length; i++) {
    // 현재 탑보다 낮은 탑은 왼쪽 레이저를 막지 못함 → pop
    while (stack.length && heights[stack[stack.length - 1]] < heights[i]) {
      stack.pop();
    }
    // 스택 top = 현재 탑의 레이저를 받는 탑 (가장 가까운 더 높은 탑)
    answer[i] = stack.length ? stack[stack.length - 1] + 1 : 0;
    stack.push(i); // 이후 탑의 레이저를 막을 후보로 스택에 추가
  }

  return answer;
}
// 1. 각 탑은 왼쪽으로 레이저를 쏘고, 자신보다 높은 탑만 수신 가능
// 2. 단조 감소 스택: 현재보다 낮은 탑은 레이저를 막지 못하므로 pop
// 3. 스택 top이 가장 가까운 수신 탑(1-indexed), 없으면 0
