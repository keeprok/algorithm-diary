function solution(n, times) {
  // 답(총 걸리는 시간) 자체를 이분탐색 → 파라메트릭 서치
  let lo = 1;
  let hi = Math.max(...times) * n; // 가장 느린 심사관이 모두 처리하는 최악 시간

  let answer = hi;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    // mid 시간 동안 심사 가능한 총 인원 수
    let people = 0;
    for (const t of times) {
      people += Math.floor(mid / t);
    }

    if (people >= n) {
      answer = mid;   // n명 이상 가능 → 더 짧은 시간 시도
      hi = mid - 1;
    } else {
      lo = mid + 1;   // 부족 → 시간 늘리기
    }
  }

  return answer;
}
// 1. "시간 mid 안에 n명 심사 가능?"은 쉽게 계산되지만 최소 시간은 직접 못 구함
//    → 답(시간)을 가정하고 검증하는 파라메트릭 서치(이분탐색)
// 2. mid 시간에 처리 가능한 인원 = Σ floor(mid / 각 심사관 시간)
// 3. n명 이상이면 시간을 줄이고(hi=mid-1), 부족하면 늘림(lo=mid+1) → 최소 시간
