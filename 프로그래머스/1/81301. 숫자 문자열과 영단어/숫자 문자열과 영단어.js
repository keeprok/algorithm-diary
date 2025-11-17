function solution(s) {
     const dict = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
  };
     let buff = "";
     let result = "";
     for (let ch of s) {
    // 숫자면 바로 추가
    if (!isNaN(ch)) {
      result += ch;
      continue;
    }

    // 문자면 buff에 쌓기
    buff += ch;

    // 완성된 단어인지 확인
    if (dict[buff] !== undefined) {
      result += dict[buff];
      buff = ""; 
    }
  }
    return Number(result);
}

