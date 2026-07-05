// 두 개 뽑아서 더하기 (완전탐색/백트래킹)
// 1. numbers에서 서로 다른 두 수를 고르는 모든 경우를 확인한다
// 2. i, j 이중 for문으로 i < j 조건을 두어 중복 선택을 막는다
// 3. 두 수의 합 sum을 구한다
// 4. answer에 같은 합이 없을 때만 push해 중복 합을 제거한다
// 5. 모든 조합을 확인한 뒤 answer를 오름차순 정렬한다
// 6. answer return

function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}
