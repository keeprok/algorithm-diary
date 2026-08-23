function solution(sequence) {
  // 펄스 수열: [1,-1,1,-1,...] 또는 [-1,1,-1,1,...] 중 더 큰 부분합을 반환

  function kadane(arr) {
    // 연속 부분 수열의 최댓값 (Kadane's Algorithm)
    let maxSum = -Infinity;
    let curSum = 0;
    for (const v of arr) {
      curSum = Math.max(v, curSum + v); // 현재 원소만 or 이전까지 누적 + 현재
      maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
  }

  // 두 가지 펄스 수열을 곱한 배열 생성
  const pulse1 = sequence.map((v, i) => v * (i % 2 === 0 ? 1 : -1));  // [1,-1,1,-1,...]
  const pulse2 = sequence.map((v, i) => v * (i % 2 === 0 ? -1 : 1)); // [-1,1,-1,1,...]

  return Math.max(kadane(pulse1), kadane(pulse2));
}
// 1. 펄스 수열을 곱하면 연속된 홀짝 부호가 교대 → 양수 구간의 합이 극대화
// 2. 두 가지 펄스 방향 모두 시도 후 최댓값 반환
// 3. Kadane's: curSum이 음수가 되면 현재 원소에서 새로 시작 (dp[i] = max(v, dp[i-1]+v))
