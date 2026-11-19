function solution(menu, order, k) {
  const n = order.length;
  const leave = Array(n);
  let chef = 0;

  for (let i = 0; i < n; i++) {
    const arrive = i * k;
    chef = Math.max(chef, arrive) + menu[order[i]];
    leave[i] = chef;
  }

  let max = 0;
  let j = 0;
  for (let i = 0; i < n; i++) {
    const arrive = i * k;
    while (j < i && leave[j] <= arrive) j++; // 같은 시각이면 퇴장이 먼저
    max = Math.max(max, i - j + 1);
  }

  return max;
}
// 1. order≤1e4 → 손님별 퇴장시각 O(N) 계산 후 투포인터로 충분
// 2. 바리스타 1명: 퇴장 = max(도착, 이전 완료) + 제조시간
// 3. 도착 순·퇴장 순이 같으므로, 이미 나간 손님만 j로 밀어 동시 인원 = i-j+1
