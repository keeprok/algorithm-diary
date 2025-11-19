function solution(nums) {
  const maxPick = nums.length / 2;     // 절반만 선택 가능
  const kinds = new Set(nums).size;    // 중복 제거 후 종류 수
  
  return Math.min(maxPick, kinds);
}
