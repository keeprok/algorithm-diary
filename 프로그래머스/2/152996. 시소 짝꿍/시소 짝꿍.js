function solution(weights) {
  weights.sort((a, b) => a - b);

  const countMap = new Map();
  let answer = 0;

  for (const w of weights) {
    // 1:1
    answer += countMap.get(w) || 0;

    // 1:2  -> previous = w / 2
    if (w % 2 === 0) {
      answer += countMap.get(w / 2) || 0;
    }

    // 2:3  -> previous = w * 2 / 3
    if ((w * 2) % 3 === 0) {
      answer += countMap.get((w * 2) / 3) || 0;
    }

    // 3:4  -> previous = w * 3 / 4
    if ((w * 3) % 4 === 0) {
      answer += countMap.get((w * 3) / 4) || 0;
    }

    countMap.set(w, (countMap.get(w) || 0) + 1);
  }

  return answer;
}