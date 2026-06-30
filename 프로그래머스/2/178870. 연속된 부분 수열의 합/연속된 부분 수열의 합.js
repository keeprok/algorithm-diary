// 1. sequence는 오름차순이므로 연속 구간 합을 투 포인터로 관리한다
// 2. right를 한 칸씩 늘리면서 sum에 sequence[right]를 더한다
// 3. sum이 k보다 커지면 left를 오른쪽으로 옮기며 sum에서 sequence[left]를 뺀다
// 4. sum이 k와 같아지면 현재 구간 [left, right]가 후보가 된다
// 5. 가장 짧은 구간을 골라야 하므로 길이가 더 짧을 때만 정답을 갱신한다
// 6. 모든 right를 확인한 뒤 [bestL, bestR] return

function solution(sequence, k) {
  let left = 0;
  let sum = 0;

  let bestL = 0;
  let bestR = sequence.length - 1;
  let bestLen = Infinity;

  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    while (sum > k && left <= right) {
      sum -= sequence[left];
      left++;
    }

    if (sum === k) {
      const len = right - left;

      if (len < bestLen) {
        bestLen = len;
        bestL = left;
        bestR = right;
      }
    }
  }

  return [bestL, bestR];
}
