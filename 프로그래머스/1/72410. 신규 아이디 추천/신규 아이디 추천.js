// 1. 모든 대문자를 소문자로 바꾼다
// 2. 소문자, 숫자, -, _, . 을 제외한 문자를 제거한다
// 3. 마침표가 2번 이상 연속되면 하나의 마침표로 바꾼다
// 4. 처음이나 끝에 있는 마침표를 제거한다
// 5. 빈 문자열이면 "a"를 대입한다
// 6. 길이가 16 이상이면 앞 15글자만 남기고, 끝 마침표가 있으면 제거한다
// 7. 길이가 3보다 작으면 마지막 문자를 길이 3이 될 때까지 붙인다
// 8. 완성된 아이디를 return

function solution(new_id) {
  let answer = new_id.toLowerCase();

  answer = answer.replace(/[^a-z0-9\-_.]/g, "");
  answer = answer.replace(/\.{2,}/g, ".");
  answer = answer.replace(/^\.|\.$/g, "");

  if (answer === "") {
    answer = "a";
  }

  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    answer = answer.replace(/\.$/, "");
  }

  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }

  return answer;
}
