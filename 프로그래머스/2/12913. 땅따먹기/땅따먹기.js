function solution(land) {
  // dp[i][j] = i번째 행의 j열을 밟았을 때 얻을 수 있는 최댓값
  // 이전 행에서 같은 열이 아닌 칸 중 최대값 + 현재 칸 점수
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      // j열을 제외한 이전 행의 최댓값을 현재 칸에 누적
      land[i][j] += Math.max(...land[i - 1].filter((_, k) => k !== j));
    }
  }

  // 마지막 행의 최댓값이 정답
  return Math.max(...land[land.length - 1]);
}
// 1. 이전 행에서 같은 열을 제외한 최댓값을 현재 칸에 누적 (DP)
// 2. 마지막 행의 최댓값이 선택 가능한 경로 중 최대 점수
