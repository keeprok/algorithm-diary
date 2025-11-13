function solution(array) {
  const freq = new Map();


  for (const num of array) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  const maxFreq = Math.max(...freq.values());

  const candidates = [...freq.keys()].filter(key => freq.get(key) === maxFreq);

  const answer = candidates.length === 1 ? candidates[0] : -1;
  return answer;
}