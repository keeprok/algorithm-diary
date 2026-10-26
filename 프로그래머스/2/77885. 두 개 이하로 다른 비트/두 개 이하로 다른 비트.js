function solution(numbers) {
  return numbers.map((n) => {
    // 짝수: 마지막 비트가 0 → +1 하면 비트 1개만 바뀌는 최소 큰 수
    if (n % 2 === 0) return n + 1;

    // 홀수: 가장 오른쪽 0을 1로, 그 바로 오른쪽 1을 0으로 (비트 2개 차이)
    // 앞에 0을 붙여 최상위 올림(예: 111 → 1011)도 처리
    const bits = ('0' + n.toString(2)).split('');
    for (let i = bits.length - 1; i >= 0; i--) {
      if (bits[i] === '0') {
        bits[i] = '1';
        bits[i + 1] = '0';
        break;
      }
    }
    return parseInt(bits.join(''), 2);
  });
}
// 1. x보다 크고, 비트가 1~2개만 다른 수 중 가장 작은 수
// 2. 짝수는 끝자리 0→1 (+1)이 정답
// 3. 홀수는 "가장 오른쪽 0"과 그 다음 비트를 스왑하면 최소
