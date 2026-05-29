// 1. nums에서 폰켓몬 종류(서로 다른 숫자)의 개수를 센다
// 2. 가져갈 수 있는 마리 수(N/2)와 종류 수 중 작은 값을 return 한다
function solution(nums) {
  const half = nums.length / 2;      // 가져갈 수 있는 마리 수
  const kinds = new Set(nums).size;  // 종류 수 (중복 제거)

  return Math.min(kinds, half);
}