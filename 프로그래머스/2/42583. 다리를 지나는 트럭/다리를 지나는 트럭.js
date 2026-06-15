// [왜 이렇게 푸나?]
// - 트럭은 1초에 1칸씩만 움직이고, 다리 위 최대 bridge_length대만 올라갈 수 있다
// - "언제 트럭이 다리에 올라가고 / 빠지는지"를 1초 단위로 시뮬레이션해야 한다
// - bridge 배열 = 다리 위 상태를 큐처럼 관리 (앞=다리 입구 쪽, 뒤=다리 출구 쪽)
// - 매 초 bridge.shift()로 맨 앞 칸이 비고, push()로 맨 뒤에 새 트럭(또는 빈칸 0)이 들어간다

// [while 사용법 — 이 문제에서]
// while (조건) { ... } → 조건이 true인 동안 반복
// 조건: truck_weights.length || sum > 0
//   → 대기 트럭이 남아있거나 OR 다리 위에 트럭이 하나라도 있으면 계속
//   → 둘 다 없을 때만 루프 종료 (모든 트럭이 다 지나감)
// 매 반복 = 시간 1초 경과 (time++)

// 1. bridge = 길이 bridge_length 배열, 0은 빈 칸
// 2. sum = 다리 위 트럭 무게 합 (매번 전체 순회 안 하려고 따로 관리)
// 3. 1초마다: shift()로 맨 앞 칸 제거 → 트럭이 다리 끝에서 나감 → sum에서 그 무게 빼기
// 4. 대기 첫 트럭 + sum <= weight 이면 → 대기에서 꺼내 bridge.push()
//    아니면 push(0) → 이번 초엔 못 올라가고 빈 칸만 앞으로 밀림
// 5. 대기도 없고 sum도 0이면 while 종료 → time return

function solution(bridge_length, weight, truck_weights) {
  const bridge = Array(bridge_length).fill(0);
  let sum = 0;   // 다리 위 무게 합
  let time = 0;  // 경과 시간(초)

  while (truck_weights.length || sum > 0) {
    time++; // 1초 경과

    sum -= bridge.shift(); // 맨 앞 칸 비움 (나간 트럭 무게만큼 sum 감소, 빈칸이면 -0)

    if (truck_weights.length && sum + truck_weights[0] <= weight) {
      const x = truck_weights.shift(); // 대기열 맨 앞 트럭이 다리에 진입
      bridge.push(x);
      sum += x;
    } else {
      bridge.push(0); // 무게 초과 or 대기 없음 → 빈 칸만 이동
    }
  }

  return time;
}
