function solution(weights) {
  // 무게별 개수 집계
  const count = new Map();
  for (const w of weights) count.set(w, (count.get(w) || 0) + 1);

  let answer = 0;

  // 시소 자리 거리(2,3,4) 비율로 균형 → a*da = b*db
  // 가능한 무게비(가벼운:무거운): 1:1, 1:2, 2:3, 3:4
  for (const [w, c] of count) {
    // 같은 무게끼리 (1:1) → 조합 nC2
    answer += (c * (c - 1)) / 2;

    // 자신보다 무거운 짝만 확인 → 중복 카운트 방지
    const partners = [w * 2];               // 1:2
    if (w % 2 === 0) partners.push((w / 2) * 3); // 2:3
    if (w % 3 === 0) partners.push((w / 3) * 4); // 3:4

    for (const p of partners) {
      if (count.has(p)) answer += c * count.get(p);
    }
  }

  return answer;
}
// 1. 시소는 거리 2,3,4 자리 → 두 무게가 a*거리 = b*거리면 균형
//    → 가능한 비율: 1:1, 1:2, 2:3, 3:4
// 2. 무게별 개수를 세고, 같은 무게는 nC2, 다른 무게는 '더 무거운 짝'만 매칭
// 3. 항상 자신보다 무거운 쪽만 세므로 각 쌍이 정확히 한 번 카운트
