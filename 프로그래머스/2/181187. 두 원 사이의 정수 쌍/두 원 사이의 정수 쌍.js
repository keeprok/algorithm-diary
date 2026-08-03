function solution(r1, r2) {
  let count = 0;

  for (let x = -r2; x <= r2; x++) {
    const xSq = x * x;

    // r2 원 안쪽: y² <= r2²-x² → y의 최대 절댓값
    let upper = Math.floor(Math.sqrt(r2 * r2 - xSq));
    // 부동소수점 보정: upper+1이 범위 안인지 재확인
    while ((upper + 1) * (upper + 1) <= r2 * r2 - xSq) upper++;

    if (xSq >= r1 * r1) {
      // x가 이미 r1 원 바깥 또는 경계 → y 전체가 유효
      count += 2 * upper + 1;
    } else {
      // r1 원 안쪽 y는 제외: y² >= r1²-x² 인 가장 작은 |y|
      let lower = Math.ceil(Math.sqrt(r1 * r1 - xSq));
      // 부동소수점 보정
      if (lower * lower < r1 * r1 - xSq) lower++;

      if (upper >= lower) {
        // |y|가 lower 이상 upper 이하: 양/음 각각 (upper-lower+1)개
        count += 2 * (upper - lower + 1);
      }
    }
  }

  return count;
}
// 1. x를 -r2~r2로 순회하며 각 x에서 유효한 y의 개수를 구함
// 2. x가 r1 원 바깥이면 -upper~upper 전부, 안쪽이면 ±lower~±upper만 유효
// 3. Math.sqrt 부동소수점 오차를 보정해 정확한 정수 경계 계산
