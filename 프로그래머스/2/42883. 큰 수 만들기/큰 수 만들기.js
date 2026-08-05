function solution(number, k) {
  const stack = [];

  for (const digit of number) {
    // 현재 숫자가 스택 top보다 크면 더 작은 값을 제거 (k 한도)
    while (k > 0 && stack.length && stack[stack.length - 1] < digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  // 순회 후 k가 남았으면 뒤에서 k개 제거 (모두 내림차순이라 못 제거한 경우)
  return stack.slice(0, stack.length - k).join('');
}
// 1. 단조 감소 스택: 앞에 있는 작은 숫자를 제거해야 전체가 커짐 (그리디)
// 2. 현재 digit > stack top이면 top을 제거 → k개 한도 내에서 반복
// 3. 순회 후 k가 남으면 뒤에서 그만큼 잘라냄
