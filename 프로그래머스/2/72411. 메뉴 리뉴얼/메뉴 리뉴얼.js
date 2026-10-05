function solution(orders, course) {
  const answer = [];

  // 주어진 문자열에서 길이 size인 모든 조합 생성
  function combinations(str, size) {
    if (size === 1) return str.split('');
    const result = [];
    for (let i = 0; i <= str.length - size; i++) {
      const head = str[i];
      const rest = combinations(str.slice(i + 1), size - 1);
      for (const r of rest) result.push(head + r);
    }
    return result;
  }

  for (const size of course) {
    const counter = new Map();

    for (const order of orders) {
      // 조합 생성을 위해 주문 메뉴를 알파벳 순 정렬 (같은 조합을 같은 key로)
      const sorted = order.split('').sort().join('');
      for (const combo of combinations(sorted, size)) {
        counter.set(combo, (counter.get(combo) || 0) + 1);
      }
    }

    // 가장 많이 주문된 조합 수 찾기 (2명 이상만 유효)
    let max = 0;
    for (const cnt of counter.values()) max = Math.max(max, cnt);
    if (max < 2) continue;

    for (const [combo, cnt] of counter) {
      if (cnt === max) answer.push(combo);
    }
  }

  return answer.sort(); // 사전 순 정렬
}
// 1. 각 코스 크기(size)마다 모든 주문에서 size개 메뉴 조합을 생성해 개수 집계
// 2. 조합 생성 전 주문을 정렬 → 순서 달라도 같은 조합을 동일 key로 카운트
// 3. 가장 많이(2명 이상) 주문된 조합만 선택, 전체를 사전 순 정렬해 반환
