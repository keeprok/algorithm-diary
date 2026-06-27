// 1. 문자열을 공백 기준으로 나눈다
// 2. 연속 공백이 있을 수 있으므로 빈 문자열은 그대로 둔다
// 3. 단어가 있으면 첫 글자는 대문자로 바꾼다
// 4. 첫 글자를 제외한 나머지는 모두 소문자로 바꾼다
// 5. 변환된 단어들을 다시 공백으로 join해서 return

function solution(s) {
  return s
    .split(" " )
    .map((word) => {
      if (word === "") return "";

      const first = word[0].toUpperCase();
      const rest = word.slice(1).toLowerCase();

      return first + rest;
    })
    .join(" " );
}
