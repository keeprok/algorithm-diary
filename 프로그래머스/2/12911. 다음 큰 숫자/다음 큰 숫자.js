function solution(n) {
  // n의 2진수에서 1의 개수
  const countOne = (x) => x.toString(2).split('1').length - 1;
  const target = countOne(n);

  // n보다 큰 수부터 1씩 증가시키며 1의 개수가 같은 첫 수 탐색
  let next = n + 1;
  while (countOne(next) !== target) {
    next++;
  }

  return next;
}
// 1. n을 이진수로 바꿔 1의 개수를 센다 (기준값)
// 2. n+1부터 1씩 올리며 1의 개수가 같은 수를 찾음
// 3. 가장 먼저 조건을 만족하는 수가 "다음 큰 숫자"
