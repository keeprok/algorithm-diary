function solution(n, l, r) {
  // n번째 유사 칸토어 비트열의 [l, r] 구간에서 1의 개수 반환 (1-indexed)
  // 패턴: 1→11011, 0→00000 재귀 치환
  // n번째 비트열 길이 = 5^n, 각 블록 5등분 시 [1,1,0,1,1] 패턴

  function countOnes(level, lo, hi) {
    if (lo > hi) return 0;

    if (level === 1) {
      // "11011" → 3번째(인덱스 2, 1-indexed 3)만 0
      let cnt = 0;
      for (let i = lo; i <= hi; i++) {
        if (i !== 3) cnt++;
      }
      return cnt;
    }

    const blockSize = Math.pow(5, level - 1);
    // 블록 인덱스 0~4, 2번 블록(0-indexed)은 0 패턴 (→ 건너뜀)
    const hasOne = [true, true, false, true, true];
    let result = 0;

    for (let b = 0; b < 5; b++) {
      const bStart = b * blockSize + 1;
      const bEnd = (b + 1) * blockSize;

      const overlapL = Math.max(lo, bStart);
      const overlapR = Math.min(hi, bEnd);

      if (overlapL > overlapR || !hasOne[b]) continue;

      // 해당 블록 내 로컬 좌표로 변환 후 재귀
      result += countOnes(level - 1, overlapL - bStart + 1, overlapR - bStart + 1);
    }

    return result;
  }

  return countOnes(n, l, r);
}
// 1. 유사 칸토어: 1→11011, 0→00000 반복 치환 → n번째 비트열 길이 = 5^n
// 2. 5^(n-1) 크기 블록 5개로 분할, 패턴 [1,1,0,1,1] (3번째 블록은 전부 0)
// 3. [l, r]과 각 블록의 겹치는 구간만 재귀 탐색 → O(5 * n) = O(n)
