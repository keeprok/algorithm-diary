function solution(n, k) {
  // k진수로 변환 후 '0'으로 분리 → 조건에 맞는 소수 후보 추출
  const parts = n.toString(k).split('0');

  // 소수 판별 (10진수로 해석 시 매우 커질 수 있어 BigInt 사용)
  const isPrime = (numStr) => {
    if (!numStr) return false;
    const num = BigInt(numStr);
    if (num < 2n) return false;
    for (let i = 2n; i * i <= num; i++) {
      if (num % i === 0n) return false;
    }
    return true;
  };

  return parts.filter(isPrime).length;
}
// 1. n을 k진수 문자열로 변환 (toString(k))
// 2. '0'을 기준으로 분리하면 0으로 둘러싸인 숫자 덩어리들이 나옴
// 3. 각 덩어리를 10진수로 해석해 소수 판별 → 소수 개수 반환
//    ★ 2진수 등에서 수가 Number 안전범위(9*10^15)를 넘을 수 있어 BigInt 필수
