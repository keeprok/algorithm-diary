function solution(s) {
  return s
    .split(' ')
    .map(word => {
      if (word.length === 0) return ''; // 연속 공백 처리
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
// 1. 공백 기준으로 단어 분리 → 각 단어의 첫 글자만 대문자, 나머지는 소문자
// 2. 연속된 공백이 있으면 빈 문자열('')이 나오므로 그대로 유지
// 3. join(' ')으로 다시 합칠 때 공백도 원래 위치에 복원됨
