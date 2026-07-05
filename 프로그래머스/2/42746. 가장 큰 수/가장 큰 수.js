// 가장 큰 수 (정렬)
// 1. numbers를 문자열로 바꿔서 정렬한다
// 2. 두 수 a, b를 이어붙였을 때 더 큰 순서가 앞에 오도록 비교한다
// 3. 정렬 기준은 (b + a)와 (a + b)의 크기 차이다
// 4. 정렬된 문자열들을 join하면 가장 큰 수가 만들어진다
// 5. 맨 앞이 0이면 전부 0인 경우이므로 "0"을 return
// 6. 그 외에는 join한 문자열을 return

function solution(numbers) {
  const answer = numbers
    .map(String)
    .sort((a, b) => (b + a) - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
