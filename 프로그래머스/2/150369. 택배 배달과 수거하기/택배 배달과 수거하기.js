function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliver = 0; // 아직 배달해야 할 짐 (음수면 트럭 여유)
  let pickup = 0;  // 아직 수거해야 할 짐

  // 가장 먼 집부터 거꾸로 처리 (멀리 갈수록 한 번에 몰아서)
  for (let i = n - 1; i >= 0; i--) {
    deliver += deliveries[i];
    pickup += pickups[i];

    // 이 지점(i+1 거리)까지 왕복이 필요한 횟수만큼 반복
    while (deliver > 0 || pickup > 0) {
      deliver -= cap; // 한 번 왕복에 cap만큼 배달
      pickup -= cap;  // 한 번 왕복에 cap만큼 수거
      answer += (i + 1) * 2; // 왕복 거리 = (거리) * 2
    }
  }

  return answer;
}
// 1. 가장 먼 집부터 처리 → 먼 곳 왕복 시 중간 집들도 함께 처리 가능
// 2. deliver/pickup 잔여량을 누적, cap 단위로 왕복하며 소진
// 3. 각 왕복마다 (현재 최원거리 i+1) * 2 만큼 거리 누적
