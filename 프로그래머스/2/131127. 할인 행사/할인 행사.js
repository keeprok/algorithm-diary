function solution(want, number, discount) {
  // 원하는 상품 → 필요 수량 맵
  const need = new Map();
  for (let i = 0; i < want.length; i++) {
    need.set(want[i], number[i]);
  }

  let answer = 0;

  // 10일짜리 윈도우를 하루씩 이동하며 검사
  for (let start = 0; start + 10 <= discount.length; start++) {
    const window = new Map();
    for (let i = start; i < start + 10; i++) {
      window.set(discount[i], (window.get(discount[i]) || 0) + 1);
    }

    // 원하는 모든 상품의 수량이 정확히 충족되는지 확인
    let ok = true;
    for (const [item, cnt] of need) {
      if ((window.get(item) || 0) !== cnt) { ok = false; break; }
    }
    if (ok) answer++;
  }

  return answer;
}
// 1. 원하는 상품과 필요 수량을 Map으로 저장
// 2. 연속 10일 윈도우마다 할인 상품 개수를 집계
// 3. 윈도우 안 개수가 원하는 수량과 모두 일치하면 등록 가능한 날 → 카운트
