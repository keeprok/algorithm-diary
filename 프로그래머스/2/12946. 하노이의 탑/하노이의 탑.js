function solution(n) {
  const moves = [];

  // 원반 n개를 from → to 로 옮기기 (via를 경유지로 사용)
  function hanoi(count, from, to, via) {
    if (count === 0) return;

    hanoi(count - 1, from, via, to); // 1) 위 n-1개를 경유지로
    moves.push([from, to]);          // 2) 가장 큰 원반을 목적지로
    hanoi(count - 1, via, to, from); // 3) 경유지의 n-1개를 목적지로
  }

  hanoi(n, 1, 3, 2);
  return moves;
}
// 1. 하노이 탑의 핵심 분해: "위 n-1개 옮기기 → 큰 원반 1개 옮기기 → n-1개 다시 옮기기"
// 2. 재귀로 from/to/via 역할을 바꿔가며 호출
// 3. 각 이동을 [출발, 도착]으로 기록 → 총 2^n - 1 번의 이동
