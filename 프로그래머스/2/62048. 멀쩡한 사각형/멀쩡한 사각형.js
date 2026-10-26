function solution(w, h) {
  // w, h 최대 1억 → 곱이 Number 안전범위를 넘을 수 있어 BigInt 사용
  const gcd = (a, b) => (b === 0n ? a : gcd(b, a % b));
  const W = BigInt(w);
  const H = BigInt(h);

  return Number(W * H - (W + H - gcd(W, H)));
}
// 1. 대각선이 지나며 잘리는 칸 수 = w + h - gcd(w, h)
//    (gcd개 격자점에서 꼭짓점을 지나 칸이 중복 카운트되므로 빼줌)
// 2. 멀쩡한 사각형 = 전체(w*h) - 잘린 칸
// 3. 유클리드 호제법으로 gcd → O(log)
