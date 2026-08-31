function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => (b + a > a + b ? 1 : -1)) // 이어 붙인 결과로 비교
    .join('');

  // 모두 0인 경우 "000..." → "0" 반환
  return result[0] === '0' ? '0' : result;
}
// 1. 숫자를 문자열로 변환 후 두 수를 이어 붙인 결과로 대소 비교
//    ex) "3"+"30"="330" vs "30"+"3"="303" → "330"이 크므로 "3"이 앞
// 2. 내림차순 정렬 후 join → 가장 큰 수
// 3. [0, 0, 0] 같이 모두 0이면 "0" 반환 (선두 0 처리)
