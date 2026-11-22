function solution(sequence) {
  let cur1 = 0;
  let cur2 = 0;
  let answer = -Infinity;
  let sign = 1;

  for (const x of sequence) {
    const a = x * sign;
    const b = -a;
    cur1 = Math.max(a, cur1 + a);
    cur2 = Math.max(b, cur2 + b);
    answer = Math.max(answer, cur1, cur2);
    sign *= -1;
  }

  return answer;
}
// 1. n≤5e5 → O(N²) 불가. 펄스는 [1,-1,…] / [-1,1,…] 두 가지뿐이라 카데인 2개
// 2. 각 위치에서 "여기서 시작 vs 이어붙이기" 중 큰 값이 그 끝의 최대 부분합
// 3. 두 패턴 최댓값 중 더 큰 값이 답. 합≤5e10이라 Number로 충분
