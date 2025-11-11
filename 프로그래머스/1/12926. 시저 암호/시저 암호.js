function solution(s, n) {
  let answer = '';

  // 1. 문자열을 한 글자씩 확인
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // 4. 공백은 건드리지 않고 그대로 넣기
    if (ch === ' ') {
      answer += ' ';
      continue;
    }

    const code = s.charCodeAt(i); // 문자 → 아스키 코드

    // 3,4. 소문자일 때: 'a' ~ 'z'
    if (ch >= 'a' && ch <= 'z') {
      const base = 'a'.charCodeAt(0); // 97
      // 3. z 다음에는 a로 (알파벳 범위 안에서만 순환)
      const shifted = ((code - base + n) % 26) + base;
      answer += String.fromCharCode(shifted);
    }
    // 3,4. 대문자일 때: 'A' ~ 'Z'
    else if (ch >= 'A' && ch <= 'Z') {
      const base = 'A'.charCodeAt(0); // 65
      const shifted = ((code - base + n) % 26) + base;
      answer += String.fromCharCode(shifted);
    }
  }

  return answer;
}