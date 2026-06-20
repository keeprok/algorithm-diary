// 1. strings를 정렬한다
// 2. 기준은 각 문자열의 n번째 문자
// 3. n번째 문자가 다르면 n번째 문자 기준으로 오름차순 정렬
// 4. n번째 문자가 같으면 문자열 전체를 사전순으로 정렬
// 5. 정렬된 strings를 return

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }

    return a[n].localeCompare(b[n]);
  });

  return strings;
}
