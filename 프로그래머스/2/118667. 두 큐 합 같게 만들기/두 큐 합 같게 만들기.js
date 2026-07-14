function solution(queue1, queue2) {
  // 두 큐를 하나의 배열로 이어 붙여 슬라이딩 윈도우처럼 다룸
  const total = [...queue1, ...queue2];
  const sum = total.reduce((a, b) => a + b, 0);

  // 합이 홀수면 절반으로 나눌 수 없으므로 불가능
  if (sum % 2 !== 0) return -1;

  const target = sum / 2;
  let left = 0;
  let right = queue1.length; // right는 queue2의 시작 인덱스
  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let count = 0;
  const maxOp = total.length * 3; // 최대 연산 횟수 상한

  while (count <= maxOp) {
    if (sum1 === target) return count;
    if (right >= total.length) break;

    // sum1이 크면 queue1에서 앞 원소 제거, 작으면 queue2에서 원소 가져옴
    if (sum1 > target) {
      sum1 -= total[left++];
    } else {
      sum1 += total[right++];
    }
    count++;
  }

  return -1;
}
// 1. 두 큐를 하나의 배열로 합쳐 슬라이딩 윈도우로 관리 (직접 큐 시뮬레이션 대신)
// 2. sum1이 target보다 크면 left++, 작으면 right++로 윈도우를 이동하며 균형점 탐색
