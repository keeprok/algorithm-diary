function solution(numbers) {
  const n = numbers.length;
  const answer = Array(n).fill(-1);
  const stack = []; // 아직 "뒷큰수"를 못 찾은 인덱스들 (값 내림차순 유지)

  for (let i = 0; i < n; i++) {
    // 현재 값이 스택 top 인덱스의 값보다 크면 → top의 뒷큰수 = 현재 값
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      const idx = stack.pop();
      answer[idx] = numbers[i];
    }
    stack.push(i);
  }

  // 스택에 남은 인덱스는 뒤에 더 큰 수가 없음 → -1 유지
  return answer;
}
// 1. 모노토닉 스택: 아직 답을 못 찾은 인덱스를 값 내림차순으로 쌓음
// 2. 현재 값이 스택 top보다 크면, 그 값이 top의 "뒤에 있는 큰 수"
// 3. 끝까지 남은 인덱스는 뒷큰수가 없으므로 -1 → O(N)으로 해결
