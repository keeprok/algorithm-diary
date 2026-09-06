function solution(n, words) {
  const used = new Set([words[0]]);

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];

    // 끝말 조건 위반 또는 중복 단어이면 탈락
    if (prev[prev.length - 1] !== curr[0] || used.has(curr)) {
      const person = (i % n) + 1;       // 탈락자 번호 (1-indexed)
      const turn   = Math.floor(i / n) + 1; // 몇 번째 차례
      return [person, turn];
    }
    used.add(curr);
  }

  return [0, 0]; // 탈락자 없음
}
// 1. Set으로 사용한 단어 추적 → 중복 검사 O(1)
// 2. 앞 단어 끝 글자 !== 현재 첫 글자, 또는 이미 쓴 단어이면 탈락
// 3. i번째 단어 → 몇 번째 사람: (i % n) + 1, 몇 번째 차례: Math.floor(i / n) + 1
