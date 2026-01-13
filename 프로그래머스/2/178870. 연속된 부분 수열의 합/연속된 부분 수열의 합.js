function solution(sequence, k) {
  let l = 0;
  let sum = 0;

  let bestL = 0;
  let bestR = sequence.length - 1;
  let bestLen = Infinity;

  for (let r = 0; r < sequence.length; r++) {
    sum += sequence[r];

    while (sum > k && l <= r) {
      sum -= sequence[l];
      l++;
    }

    if (sum === k) {
      const len = r - l;
      if (len < bestLen) {
        bestLen = len;
        bestL = l;
        bestR = r;
      }
    }
  }

  return [bestL, bestR];
}
