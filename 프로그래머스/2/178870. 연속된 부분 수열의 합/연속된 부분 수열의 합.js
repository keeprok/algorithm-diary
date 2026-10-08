function solution(sequence, k) {
  let left = 0;
  let sum = 0;
  let best = [0, sequence.length]; // [시작, 끝], 길이 최소화용 초기값

  // 모든 값이 양수 → 투포인터(슬라이딩 윈도우)로 O(N)
  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    // 합이 k를 넘으면 왼쪽을 줄여 윈도우 축소
    while (sum > k) {
      sum -= sequence[left];
      left++;
    }

    // 합이 정확히 k면 후보 → 더 짧으면(같으면 더 앞) 갱신
    if (sum === k) {
      if (right - left < best[1] - best[0]) {
        best = [left, right];
      }
    }
  }

  return best;
}
// 1. 수열이 모두 양수 → 오른쪽을 늘리며 합이 k를 넘으면 왼쪽을 줄이는 투포인터
// 2. 합이 정확히 k인 구간마다 길이 비교 → 가장 짧은 구간 선택
// 3. left를 왼쪽부터 이동하므로 길이가 같으면 자연히 더 앞선 구간이 유지됨
