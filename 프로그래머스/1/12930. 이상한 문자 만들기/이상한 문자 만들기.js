function solution(s) {
  let wordIdx = 0; // 단어 내 인덱스 (공백 만나면 초기화)

  return s.split('').map(c => {
    if (c === ' ') {
      wordIdx = 0; // 공백 → 다음 단어 인덱스 리셋
      return ' ';
    }
    // 단어 내 짝수 인덱스 → 대문자, 홀수 인덱스 → 소문자
    return wordIdx++ % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
  }).join('');
}
// 1. 문자 하나씩 순회하면서 단어 내 인덱스(wordIdx)를 별도 추적
// 2. 공백을 만나면 wordIdx를 0으로 초기화 → 다음 단어의 기준 재설정
// 3. split('').map().join('')으로 문자 단위 변환 후 재조합
