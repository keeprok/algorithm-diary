function solution(babbling) {
  const syllables = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (const word of babbling) {
    let s = word;
    let prev = '';
    let valid = true;

    while (s.length > 0) {
      // 현재 위치에서 시작하는 음절 탐색 (이전 음절과 같으면 연속 사용 불가)
      const matched = syllables.find(syl => s.startsWith(syl) && syl !== prev);
      if (!matched) { valid = false; break; }
      prev = matched;
      s = s.slice(matched.length);
    }

    if (valid) count++;
  }

  return count;
}
// 1. 각 단어를 앞에서부터 음절(aya/ye/woo/ma)로 분해 (그리디)
// 2. 이전에 사용한 음절과 같으면 연속 사용 불가 → 무효
// 3. 음절 첫 글자가 모두 달라 그리디가 항상 유일하게 결정됨
// 4. 단어 전체를 분해할 수 있으면 발음 가능 → count++
