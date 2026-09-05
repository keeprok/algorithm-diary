function solution(s) {
  const nums = s.split(' ').map(Number);
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}
// 1. 공백으로 분리 후 Number 변환 (음수도 올바르게 처리)
// 2. Math.min / Math.max로 최솟값, 최댓값 계산
// 3. 템플릿 리터럴로 "최솟값 최댓값" 형태 반환
