function solution(cards) {
  const n = cards.length;
  const visited = Array(n).fill(false);
  const lengths = []; // 각 사이클(상자 묶음)의 길이

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    // i번 상자부터 가리키는 번호를 따라가며 한 사이클 추적
    let len = 0;
    let cur = i;
    while (!visited[cur]) {
      visited[cur] = true;
      cur = cards[cur] - 1; // 카드 번호 → 0-based 상자 인덱스
      len++;
    }
    lengths.push(len);
  }

  // 가장 긴 두 사이클의 곱이 최대 점수 (사이클이 1개면 0)
  lengths.sort((a, b) => b - a);
  return lengths.length < 2 ? 0 : lengths[0] * lengths[1];
}
// 1. 상자 i → cards[i] 상자로 이동하는 구조 = 여러 사이클로 분해됨
// 2. 방문 체크하며 각 사이클의 길이를 수집
// 3. 가장 긴 두 사이클 길이의 곱이 정답 (사이클 1개뿐이면 0)
