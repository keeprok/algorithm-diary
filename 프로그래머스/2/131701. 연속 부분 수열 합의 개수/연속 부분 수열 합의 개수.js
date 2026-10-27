function solution(elements) {
  const n = elements.length;
  const sums = new Set();

  // 원형이라 시작점을 모두 순회하며 길이 1~n 구간합을 모음
  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let len = 1; len <= n; len++) {
      sum += elements[(start + len - 1) % n]; // 원형 인덱스
      sums.add(sum);
    }
  }

  return sums.size;
}
// 1. 원형 수열 → 시작점 n개 × 길이 1~n 구간합을 모두 구함
// 2. Set에 넣어 중복 합을 제거한 개수가 정답
// 3. n ≤ 1,000 → O(n²) 완전탐색으로 충분
