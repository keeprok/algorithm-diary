// 1. citations를 내림차순으로 정렬한다
// 2. 앞에서부터 보면서 i + 1편의 논문이 현재 인용 수 이상인지 확인한다
// 3. citations[i] >= i + 1 이면 H-Index 후보가 된다
// 4. 조건을 만족할 때마다 answer = i + 1로 갱신한다
// 5. 조건을 만족하지 못하는 순간부터는 더 커질 수 없으므로 반복 종료
// 6. answer return

function solution(citations) {
  citations.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < citations.length; i++) {
    const paperCount = i + 1;

    if (citations[i] >= paperCount) {
      answer = paperCount;
    } else {
      break;
    }
  }

  return answer;
}
