function solution(k, tangerine) {
  // 크기별 개수 집계
  const count = new Map();
  for (const t of tangerine) {
    count.set(t, (count.get(t) || 0) + 1);
  }

  // 개수 내림차순 정렬 → 많은 종류부터 담아야 종류 수 최소화 (greedy)
  const counts = [...count.values()].sort((a, b) => b - a);

  let picked = 0;
  let kinds = 0;
  for (const c of counts) {
    picked += c;
    kinds++;
    if (picked >= k) break; // k개를 채우면 종료
  }

  return kinds;
}
// 1. 귤 크기별 개수를 센 뒤 개수 기준 내림차순 정렬
// 2. 개수가 많은 종류부터 담으면 최소 종류로 k개를 채울 수 있음 (greedy)
// 3. 담은 개수가 k 이상이 되는 순간의 종류 수가 정답
