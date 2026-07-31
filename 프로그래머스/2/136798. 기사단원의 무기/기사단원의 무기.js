function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    // i의 약수 개수 세기: j*j <= i 까지만 순회하면 O(√n)으로 효율적
    let count = 0;
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        count++;
        if (j !== i / j) count++; // 제곱수가 아니면 쌍이 존재하므로 2개
      }
    }
    // 약수 개수가 limit 초과면 power 무기, 이하면 약수 개수만큼 비용 소모
    answer += count > limit ? power : count;
  }

  return answer;
}
// 1. 각 기사의 공격력(i)에 해당하는 약수 개수를 구함 → 제곱근까지만 탐색해 효율화
// 2. 약수 개수 > limit이면 power로 대체, 아니면 약수 개수를 비용으로 누적
