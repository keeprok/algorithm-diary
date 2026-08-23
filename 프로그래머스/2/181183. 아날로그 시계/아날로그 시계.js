function solution(h1, m1, s1, h2, m2, s2) {
  const start = h1 * 3600 + m1 * 60 + s1;
  const end = h2 * 3600 + m2 * 60 + s2;

  // 정수 a, b로 ceil(a/b) 계산 (부동소수점 오차 방지)
  function ceilDiv(a, b) {
    return Math.floor(a / b) + (a % b !== 0 ? 1 : 0);
  }

  // 초침-분침: 상대 속도 59/10 °/s → 3600/59 초마다 만남 (k번째: 3600k/59 초)
  // start ≤ 3600k/59 ≤ end  ↔  start*59 ≤ 3600k ≤ end*59
  const smMin = ceilDiv(start * 59, 3600);
  const smMax = Math.floor((end * 59) / 3600);
  const countSM = Math.max(0, smMax - smMin + 1);

  // 초침-시침: 상대 속도 719/120 °/s → 43200/719 초마다 만남 (k번째: 43200k/719 초)
  const shMin = ceilDiv(start * 719, 43200);
  const shMax = Math.floor((end * 719) / 43200);
  const countSH = Math.max(0, shMax - shMin + 1);

  // 세 침 동시 만남: 12시간 내 t=0(12:00:00)에만 → SM·SH 양쪽에 카운팅되어 1 감산
  const countAll = start === 0 ? 1 : 0;

  return countSM + countSH - countAll;
}
// 1. 초침-분침 상대 속도로 만남 주기 도출 → [start, end] 내 만나는 횟수 계산
// 2. 초침-시침도 동일하게 계산
// 3. 12:00:00에서 세 침이 동시에 만나 중복 카운팅 → 1 감산
// 4. 정수 연산(ceilDiv)으로 부동소수점 오차 없이 정확한 경계 처리
