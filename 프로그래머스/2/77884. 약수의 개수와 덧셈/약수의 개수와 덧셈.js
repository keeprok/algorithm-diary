function solution(left, right) {
  let answer = 0;

  for (let n = left; n <= right; n++) {
    // 완전제곱수는 약수의 개수가 홀수 → 빼고, 나머지는 더함
    const root = Math.sqrt(n);
    if (Number.isInteger(root)) answer -= n;
    else answer += n;
  }

  return answer;
}
// 1. 약수 개수가 짝수면 더하고 홀수면 뺌
// 2. 약수 개수가 홀수인 수 = 완전제곱수뿐 (√n이 정수)
//    → 일일이 약수를 세지 않고 제곱수인지만 판별하면 O(√ 없이) 간단
// 3. left~right 순회하며 누적
