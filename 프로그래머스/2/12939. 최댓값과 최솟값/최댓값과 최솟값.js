// 1. 문자열 s는 공백으로 구분된 숫자들이 들어 있다
// 2. split(" ")으로 숫자 문자열 배열을 만든다
// 3. map(Number)로 실제 숫자 배열로 바꾼다
// 4. Math.min, Math.max로 최솟값과 최댓값을 구한다
// 5. "최솟값 최댓값" 형태의 문자열로 return

function solution(s) {
  const numbers = s.split(" " ).map(Number);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return `${min} ${max}`;
}
