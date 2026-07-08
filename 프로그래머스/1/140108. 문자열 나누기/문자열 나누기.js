function solution(s) {
  let x = s[0];
  let same = 0; // 같은 글자 횟수
  let diff = 0; // 다른 글자 횟수
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (x === s[i]) {
      same++;
    } else {
      diff++;
    } // 같아지기전까지 비교하기위해++

    if (same === diff) {
      x = s[i + 1];
      same = 0;
      diff = 0;
      answer++;
    } // 같아지는 순간 분리를 위해 초기화
  }
  if (same > 0 || diff > 0) {
    answer++;
  }
  return answer;
}
// 1. 첫글자를 기억하고 같은 글자횟수와 다른글자 횟수를 기억해서 숫자가 동일 할때 {0제외} 문자열을 저장하고
// 2. 한번분리를 할때마다 n++ 이렇게 게속 반복을 해서 n 횟수를 저장한다
