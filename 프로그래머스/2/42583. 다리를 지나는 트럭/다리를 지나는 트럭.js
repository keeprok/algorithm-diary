function solution(bridge_length, weight, truck_weights) {
  // 다리를 길이만큼의 큐로 표현 (0 = 빈 자리, 양수 = 트럭 무게)
  const bridge = Array(bridge_length).fill(0);
  let time = 0;
  let currentWeight = 0;
  let idx = 0; // 다음에 올라올 트럭 인덱스

  while (idx < truck_weights.length || currentWeight > 0) {
    time++;
    // 맨 앞 칸을 내보내며 현재 하중 감소
    currentWeight -= bridge.shift();

    if (idx < truck_weights.length && currentWeight + truck_weights[idx] <= weight) {
      // 다음 트럭이 올라갈 수 있으면 올리기
      bridge.push(truck_weights[idx]);
      currentWeight += truck_weights[idx];
      idx++;
    } else {
      // 올라갈 수 없으면 빈 자리(0)로 채워 시간 진행
      bridge.push(0);
    }
  }

  return time;
}
// 1. 다리를 bridge_length 크기의 큐로 표현 → 매 초마다 shift() + push()
// 2. 현재 하중 + 다음 트럭 무게 ≤ weight이면 트럭 올리기, 아니면 0(빈 자리) push
// 3. 모든 트럭이 올라가고 다리가 빌 때까지 반복
