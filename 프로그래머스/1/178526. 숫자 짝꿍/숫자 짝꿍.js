function solution(X, Y) {
  // X, Y 각 자릿수의 등장 횟수 계산
  const countX = Array(10).fill(0);
  const countY = Array(10).fill(0);
  for (const d of X) countX[+d]++;
  for (const d of Y) countY[+d]++;

  // 공통 자릿수를 내림차순으로 조합 (min 횟수만큼 사용)
  let result = '';
  for (let d = 9; d >= 0; d--) {
    result += String(d).repeat(Math.min(countX[d], countY[d]));
  }

  if (!result) return '-1';      // 공통 자릿수 없음
  if (result[0] === '0') return '0'; // 모두 0인 경우
  return result;
}
// 1. X, Y의 각 자릿수 빈도 계산 후 min(countX, countY)개씩 사용
// 2. 9부터 0까지 내림차순으로 붙이면 자동으로 가장 큰 수가 됨
// 3. 공통 없으면 '-1', 모두 0이면 '0' 반환 (문자열 처리)
