function solution(numbers) {
  // 1. 0~9 중 이미 나온 숫자는 Set에 넣어서 표시한다
  const appeared = new Set(numbers);
  let answer = 0;

  // 2. 0부터 9까지 돌면서 Set에 없는 숫자만 answer에 더한다
  for (let i = 0; i <= 9; i++) {
    if (!appeared.has(i)) {
      answer += i;
    }
  }

  // 3. 없는 숫자들의 합을 반환한다
  return answer;
}
// 1. numbers에 있는 값은 Set에 저장해 "이미 나온 숫자"로 표시한다
// 2. 0~9를 하나씩 보면서 Set에 없는 숫자만 골라 더한다
// 3. 그 합이 정답이다
