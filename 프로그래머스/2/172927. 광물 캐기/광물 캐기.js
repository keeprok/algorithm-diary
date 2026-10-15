function solution(picks, minerals) {
  const totalPicks = picks[0] + picks[1] + picks[2];

  // 광물을 5개씩 묶음 (가진 곡괭이 수만큼만 캐면 됨)
  const groups = [];
  for (let i = 0; i < minerals.length && groups.length < totalPicks; i += 5) {
    const chunk = minerals.slice(i, i + 5);
    let d = 0, ir = 0, s = 0;
    for (const m of chunk) {
      if (m === 'diamond') d++;
      else if (m === 'iron') ir++;
      else s++;
    }
    groups.push({ d, ir, s });
  }

  // 돌 곡괭이로 캘 때 피로도가 큰(=다이아 많은) 묶음을 앞으로 → 좋은 곡괭이 먼저 배정
  groups.sort((a, b) => (b.d * 25 + b.ir * 5 + b.s) - (a.d * 25 + a.ir * 5 + a.s));

  const p = [...picks]; // [다이아, 철, 돌] 곡괭이 수
  let fatigue = 0;

  for (const g of groups) {
    if (p[0] > 0) { fatigue += g.d + g.ir + g.s; p[0]--; }          // 다이아 곡괭이
    else if (p[1] > 0) { fatigue += g.d * 5 + g.ir + g.s; p[1]--; }  // 철 곡괭이
    else { fatigue += g.d * 25 + g.ir * 5 + g.s; p[2]--; }           // 돌 곡괭이
  }

  return fatigue;
}
// 1. 광물은 순서대로 5개씩 묶여 캐짐 → 곡괭이 수만큼의 묶음만 고려
// 2. 다이아가 많은(피로도 영향 큰) 묶음부터 처리하도록 정렬 (greedy)
// 3. 좋은 곡괭이(다이아>철>돌)를 어려운 묶음에 먼저 배정 → 총 피로도 최소
