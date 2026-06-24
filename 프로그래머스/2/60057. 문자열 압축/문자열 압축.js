// 1. 문자열 길이가 1이면 압축할 수 없으므로 1 return
// 2. 자르는 단위 unit을 1부터 s.length / 2까지 모두 시도한다
// 3. prev = 직전에 본 문자열 조각, count = 같은 조각이 반복된 횟수
// 4. unit 간격으로 문자열을 잘라 current를 만든다
// 5. current와 prev가 같으면 count++ 한다
// 6. 다르면 지금까지의 count와 prev를 compressed에 붙이고, prev/current를 갱신한다
// 7. 반복문이 끝난 뒤 마지막 prev도 compressed에 붙인다
// 8. 모든 unit 중 compressed 길이의 최솟값을 answer로 return

function solution(s) {
  if (s.length === 1) return 1;

  let answer = s.length;

  for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
    let compressed = "";
    let prev = s.slice(0, unit);
    let count = 1;

    for (let i = unit; i < s.length; i += unit) {
      const current = s.slice(i, i + unit);

      if (current === prev) {
        count++;
      } else {
        compressed += (count > 1 ? count : "") + prev;
        prev = current;
        count = 1;
      }
    }

    compressed += (count > 1 ? count : "") + prev;
    answer = Math.min(answer, compressed.length);
  }

  return answer;
}
