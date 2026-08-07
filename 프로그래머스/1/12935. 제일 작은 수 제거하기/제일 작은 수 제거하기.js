function solution(arr) {
  // 원소가 1개면 제거할 수 없으므로 [-1] 반환
  if (arr.length === 1) return [-1];

  const minIdx = arr.indexOf(Math.min(...arr));
  // 최솟값 인덱스를 제외한 나머지 반환
  return arr.filter((_, i) => i !== minIdx);
}
// 1. 길이가 1이면 [-1] 반환 (예외 처리)
// 2. Math.min으로 최솟값 찾고 indexOf로 첫 번째 위치 확인
// 3. filter로 해당 인덱스만 제외한 배열 반환
