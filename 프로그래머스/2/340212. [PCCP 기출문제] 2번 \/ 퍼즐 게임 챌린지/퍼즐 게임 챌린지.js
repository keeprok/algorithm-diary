function solution(diffs, times, limit) {
  // 특정 레벨 level에서 모든 퍼즐을 푸는 데 걸리는 시간 계산
  function canSolve(level) {
    let total = times[0]; // 첫 퍼즐은 항상 혼자 풀 수 있음

    for (let i = 1; i < diffs.length; i++) {
      if (diffs[i] <= level) {
        // 난이도가 레벨 이하 → 혼자 time[i]분
        total += times[i];
      } else {
        // 난이도 초과 → 이전 퍼즐 푸는 시간 × 초과 횟수 + 본인 시간
        total += (diffs[i] - level) * times[i - 1] + times[i];
      }
      if (total > limit) return false; // 조기 종료
    }

    return total <= limit;
  }

  // 이분탐색: 가능한 최소 레벨 탐색 (1 ~ max(diffs))
  let lo = 1;
  let hi = Math.max(...diffs);

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (canSolve(mid)) hi = mid;
    else lo = mid + 1;
  }

  return lo;
}
// 1. 레벨 l에서 diff[i] > l이면 이전 퍼즐 푸는 시간 × (diff[i]-l)만큼 추가 소요
// 2. 이분탐색으로 limit 내에 모두 풀 수 있는 최소 레벨 탐색 (O(n log D))
