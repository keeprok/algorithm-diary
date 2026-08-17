function solution(dartResult) {
  const scores = [];

  // 정규식으로 각 투구 파싱: 숫자(1~10) + SDT + 옵션(*|#)
  const regex = /(\d+)([SDT])([*#]?)/g;
  let match;

  while ((match = regex.exec(dartResult)) !== null) {
    const [, num, type, option] = match;
    let score = Number(num);

    // S=1제곱, D=2제곱, T=3제곱
    if (type === 'D') score **= 2;
    else if (type === 'T') score **= 3;

    // *: 현재 점수 ×2, 이전 점수도 ×2
    if (option === '*') {
      score *= 2;
      if (scores.length > 0) scores[scores.length - 1] *= 2;
    } else if (option === '#') {
      // #: 현재 점수 ×(-1)
      score *= -1;
    }

    scores.push(score);
  }

  return scores.reduce((a, b) => a + b, 0);
}
// 1. 정규식으로 투구별 [숫자, SDT, 옵션] 추출
// 2. S/D/T로 제곱 적용 후 *, # 보너스 처리
// 3. *은 이전 점수에도 ×2 적용하는 것이 핵심
