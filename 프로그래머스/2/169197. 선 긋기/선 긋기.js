function solution(lines) {
  // 시작점 기준 오름차순 정렬
  lines.sort((a, b) => a[0] - b[0]);

  let totalLength = 0;
  let [curStart, curEnd] = lines[0];

  for (let i = 1; i < lines.length; i++) {
    const [s, e] = lines[i];

    if (s < curEnd) {
      // 현재 구간과 겹침 → 병합 (끝점을 더 큰 값으로 갱신)
      curEnd = Math.max(curEnd, e);
    } else {
      // 겹치지 않음 → 이전 구간 길이 합산 후 새 구간 시작
      totalLength += curEnd - curStart;
      [curStart, curEnd] = [s, e];
    }
  }
  totalLength += curEnd - curStart; // 마지막 구간 합산

  return totalLength;
}
// 1. 시작점 정렬 후 순회하며 겹치는 구간을 하나로 병합 (끝점 최댓값 유지)
// 2. 겹치지 않는 새 구간이 나오면 이전 병합 구간 길이를 합산
// 3. 마지막 구간은 루프 이후 별도로 합산
