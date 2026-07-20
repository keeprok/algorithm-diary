function solution(n) {
  let answer = 0;

  // i부터 시작하는 연속된 자연수의 합이 n이 되는 경우 탐색
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      // 합이 n과 같으면 경우의 수 +1 후 다음 시작점으로
      if (sum === n) {
        answer++;
        break;
      }
      // 합이 n을 초과하면 더 볼 필요 없음
      if (sum > n) break;
    }
  }

  return answer;
}
// 1. i를 시작점으로 j를 늘려가며 연속합을 구해 n과 비교
// 2. 합이 n이면 카운트, n 초과 시 안쪽 루프 종료 (더 커질 일만 있음)
