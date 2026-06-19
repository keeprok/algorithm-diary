// 1. answer = 합이 0이 되는 삼총사 개수
// 2. dfs(start, selected, sum)으로 조합을 만든다
//    - start: 다음으로 고를 수 있는 시작 인덱스
//    - selected: 지금까지 고른 숫자 개수
//    - sum: 지금까지 고른 숫자의 합
// 3. selected가 3이면 sum이 0인지 확인한다
// 4. sum이 0이면 answer++ 하고 return
// 5. 아직 3개를 못 골랐으면 start부터 끝까지 하나씩 선택한다
// 6. dfs(i + 1, selected + 1, sum + number[i])로 더 깊이 들어간다
// 7. i + 1부터 시작하므로 같은 숫자를 다시 고르지 않고 조합만 만든다

function solution(number) {
  let answer = 0;

  function dfs(start, selected, sum) {
    if (selected === 3) {
      if (sum === 0) answer++;
      return;
    }

    for (let i = start; i < number.length; i++) {
      dfs(i + 1, selected + 1, sum + number[i]);
    }
  }

  dfs(0, 0, 0);
  return answer;
}