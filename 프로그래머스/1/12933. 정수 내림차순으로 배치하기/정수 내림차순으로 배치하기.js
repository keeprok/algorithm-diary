// 1. 숫자 n을 문자열로 바꾼다
// 2. split("")으로 각 자리 숫자를 배열로 만든다
// 3. sort((a, b) => b - a)로 큰 숫자부터 정렬한다
// 4. join("")으로 다시 문자열로 합친다
// 5. Number()로 숫자로 바꿔 return

function solution(n) {
  const answer = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return Number(answer);
}
