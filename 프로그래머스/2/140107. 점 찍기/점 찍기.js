function solution(k, d) {
  let count = 0;
  const d2 = d * d;

  // x를 0, k, 2k, ... 로 찍고, 원 안에 들어오는 y 개수를 셈
  for (let x = 0; x <= d; x += k) {
    const maxY = Math.floor(Math.sqrt(d2 - x * x)); // x²+y² ≤ d² 인 최대 y
    count += Math.floor(maxY / k) + 1; // 0, k, ..., k*floor(maxY/k)
  }

  return count;
}
// 1. 찍는 점은 (a*k, b*k) 이고 원점과의 거리 ≤ d
// 2. x를 k 간격으로 고정하면 가능한 y 개수 = floor(sqrt(d²-x²)/k) + 1
// 3. d ≤ 100만 → x 루프 O(d/k)로 충분
