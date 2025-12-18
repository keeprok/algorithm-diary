function solution(n, words) {
  const used = new Set();
  used.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const cur = words[i];


    if (prev[prev.length - 1] !== cur[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }


    if (used.has(cur)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    used.add(cur);
  }


  return [0, 0];
}
