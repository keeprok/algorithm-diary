function solution(dartResult) {
  const score = [];
  let i = 0;

  while (i < dartResult.length) {
    // 점수 (10 처리)
    let num = 0;
    if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
      num = 10; i += 2;
    } else {
      num = Number(dartResult[i]); i += 1;
    }

    // 보너스
    const b = dartResult[i]; i += 1;
    if (b === 'D') num = num ** 2;
    else if (b === 'T') num = num ** 3;

    // 옵션 (있을 수도/없을 수도)
    if (i < dartResult.length && (dartResult[i] === '*' || dartResult[i] === '#')) {
      const op = dartResult[i]; i += 1;
      if (op === '*') {
        num *= 2;
        if (score.length > 0) score[score.length - 1] *= 2;
      } else {
        num *= -1;
      }
    }

    score.push(num);
  }

  return score.reduce((a, b) => a + b, 0);
}
