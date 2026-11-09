function solution(diffs, times, limit) {
  const n = diffs.length;

  const can = (level) => {
    let t = 0;
    for (let i = 0; i < n; i++) {
      if (diffs[i] <= level) {
        t += times[i];
      } else {
        const wrong = diffs[i] - level;
        const prev = i === 0 ? 0 : times[i - 1];
        t += wrong * (times[i] + prev) + times[i];
      }
      if (t > limit) return false;
    }
    return true;
  };

  let lo = 1;
  let hi = Math.max(...diffs);
  let answer = hi;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (can(mid)) {
      answer = mid; // 가능하면 숙련도를 더 낮춰 본다
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return answer;
}
// 1. 숙련도 level을 가정하면 제한 시간 내 가능 여부는 O(N)으로 판정 가능
// 2. 그래서 답(최소 level)을 이분탐색 = 입국심사와 같은 파라메트릭 서치
// 3. 틀릴 때마다 이전 퍼즐을 다시 풀고, 마지막에 현재 퍼즐을 한 번 더 풂
