function solution(clothes) {
  const categories = {};
  for (const [, type] of clothes) {
    categories[type] = (categories[type] || 0) + 1;
  }

  // 각 종류마다 (옷 수 + 1)을 곱함 → "안 입는" 선택지 포함
  // 마지막에 -1 → 전부 안 입는 경우(알몸) 제외
  return Object.values(categories).reduce((acc, count) => acc * (count + 1), 1) - 1;
}
// 1. 옷을 종류별로 개수 집계 (이름은 필요 없고 종류만 사용)
// 2. 각 종류에서 "안 입기" 선택지를 포함해 (count + 1)가지
// 3. 모든 종류의 경우의 수를 곱한 뒤 전부 안 입는 경우 1가지 제외
