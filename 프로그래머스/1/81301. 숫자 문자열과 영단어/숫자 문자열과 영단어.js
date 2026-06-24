// 1. 영단어와 숫자를 매칭하는 dict를 만든다
// 2. s를 앞에서부터 한 글자씩 확인한다
// 3. 숫자 문자가 나오면 result에 바로 붙인다
// 4. 영어 문자가 나오면 buffer에 누적한다
// 5. buffer가 dict에 있는 완성된 단어가 되면 해당 숫자를 result에 붙인다
// 6. 숫자로 바꾼 뒤 buffer를 비우고 다음 글자를 계속 확인한다
// 7. 끝까지 만든 result를 Number로 바꿔 return

function solution(s) {
  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let buffer = "";
  let result = "";

  for (const ch of s) {
    if (!Number.isNaN(Number(ch))) {
      result += ch;
      continue;
    }

    buffer += ch;

    if (dict[buffer] !== undefined) {
      result += dict[buffer];
      buffer = "";
    }
  }

  return Number(result);
}
