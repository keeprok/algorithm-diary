function solution(brown, yellow) {
  const total = brown + yellow;

  // 세로(짧은 쪽)는 최소 3 (테두리가 되려면 위아래 각 1줄 + 안쪽 최소 1줄)
  for (let height = 3; height * height <= total; height++) {
    if (total % height !== 0) continue;
    const width = total / height; // 가로는 세로 이상

    // 안쪽 노란색 영역: (가로 - 2) * (세로 - 2) === yellow
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}
// 1. 전체 = brown + yellow → 가능한 (가로, 세로) 조합을 완전탐색
// 2. 세로를 3부터 √total까지 탐색 (세로 ≤ 가로 보장, 테두리 최소 크기 3)
// 3. 안쪽 넓이 (width-2)*(height-2) === yellow 이면 정답
