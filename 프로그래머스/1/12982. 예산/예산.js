// 예산 (탐욕법)
// 1. 부서별 신청 금액 d를 오름차순 정렬한다
// 2. 싼 부서부터 하나씩 지원해 최대한 많은 부서를 살린다
// 3. sum에 현재 부서 금액을 더했을 때 budget을 넘으면 중단한다
// 4. 넘지 않으면 sum에 더하고 cnt를 1 올린다
// 5. 모든 부서를 확인한 뒤 cnt return

function solution(d, budget) {
  d.sort((a, b) => a - b);

  let sum = 0;
  let cnt = 0;

  for (const x of d) {
    if (sum + x > budget) break;
    sum += x;
    cnt++;
  }

  return cnt;
}
