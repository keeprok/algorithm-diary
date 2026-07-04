// 문자열 나누기 (문자열/구현)
// 1. 문자열을 앞에서부터 한 글자씩 보며 부분 문자열을 나눈다
// 2. 새 부분이 시작될 때 그 위치의 글자를 기준 문자 x로 정한다
// 3. x와 같은 글자 개수(same)와 다른 글자 개수(diff)를 세어 간다
// 4. same과 diff가 같아지면 하나의 부분 문자열이 끝난 것이다
// 5. 부분이 끝날 때마다 answer를 1 올리고 same, diff를 0으로 초기화한다
// 6. 마지막에 남은 글자가 있으면 그 부분도 하나로 더 센다
// 7. answer return

function solution(s) {
  let answer = 0;
  let same = 0;
  let diff = 0;
  let x = "";

  for (let i = 0; i < s.length; i++) {
    if (same === 0 && diff === 0) {
      x = s[i];
    }

    if (s[i] === x) {
      same++;
    } else {
      diff++;
    }

    if (same === diff) {
      answer++;
      same = 0;
      diff = 0;
    }
  }

  if (same !== 0 || diff !== 0) {
    answer++;
  }

  return answer;
}
