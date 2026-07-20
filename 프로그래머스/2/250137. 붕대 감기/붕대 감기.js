function solution(bandage, health, attacks) {
  const [t, x, y] = bandage; // 시전 시간, 초당 회복량, 추가 회복량
  const maxHp = health;
  const attackMap = new Map(attacks.map(([time, dmg]) => [time, dmg]));

  let curHp = maxHp;
  let castStart = 1; // 현재 붕대 감기 시작 시점
  const lastTime = attacks[attacks.length - 1][0];

  for (let time = 1; time <= lastTime; time++) {
    if (attackMap.has(time)) {
      // 공격 전까지 붕대 감기로 회복한 시간 계산
      const healTime = time - castStart;
      // 초당 x씩 회복, t초 채우면 y 추가
      curHp = Math.min(maxHp, curHp + healTime * x + Math.floor(healTime / t) * y);

      // 공격 피해 적용
      curHp -= attackMap.get(time);
      if (curHp <= 0) return -1; // 사망

      castStart = time + 1; // 공격 받은 다음 초부터 다시 붕대 감기
    }
  }

  return curHp;
}
// 1. 공격 시점마다 그 직전까지 붕대 감기로 회복한 양을 일괄 계산 (매 초 시뮬레이션 대신)
// 2. t초 완전 시전 횟수(Math.floor)만큼 추가 회복 y 적용, maxHp 초과 방지
