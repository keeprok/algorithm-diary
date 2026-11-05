function solution(s) {
  const n = s.length;
  let minLen = n;

  // 1개 단위 ~ n/2 단위까지 잘라 압축해 보고 최단 길이 선택
  for (let unit = 1; unit <= Math.floor(n / 2); unit++) {
    let compressed = '';
    let prev = s.slice(0, unit);
    let count = 1;

    for (let i = unit; i < n; i += unit) {
      const cur = s.slice(i, i + unit);
      if (cur === prev) {
        count++;
      } else {
        compressed += (count > 1 ? count : '') + prev;
        prev = cur;
        count = 1;
      }
    }
    compressed += (count > 1 ? count : '') + prev;
    minLen = Math.min(minLen, compressed.length);
  }

  return minLen;
}
// 1. 문자열을 1~(n/2) 길이 단위로 잘라 연속 중복을 숫자로 압축
// 2. 같은 조각이 이어지면 count++, 달라지면 (count+조각)을 결과에 붙임
// 3. 모든 단위 중 가장 짧은 압축 길이가 정답 (압축 안 되는 경우는 원본 길이)
