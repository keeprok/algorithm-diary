function solution(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
}
// 1. 높이≤500 → O(N²) 바닥부터 올라오는 DP
// 2. 각 칸의 답 = 자신 + max(아래 왼, 아래 오른). 위에서 고르면 미래를 모름
// 3. 아래 줄을 덮어쓰면 별도 배열 없이 꼭대기가 전체 최대 경로
