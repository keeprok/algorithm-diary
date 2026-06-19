// 1. answer = 3개를 골랐을 때 합이 소수인 경우의 수
// 2. isPrime 함수로 소수인지 확인한다
//    - 2보다 작으면 소수 아님
//    - 2부터 sqrt(num)까지 나누어 떨어지면 소수 아님
// 3. dfs(start, selected, sum)으로 3개 조합을 만든다
// 4. selected가 3이면 sum이 소수인지 확인한다
// 5. 소수면 answer++ 하고 return
// 6. 아직 3개를 못 골랐으면 start부터 하나씩 선택한다
// 7. 선택한 숫자를 sum에 더하고 i + 1부터 다시 DFS 호출
// 8. 모든 경우를 확인한 뒤 answer return

function solution(nums) {
  let answer = 0;

  function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  function dfs(start, selected, sum) {
    if (selected === 3) {
      if (isPrime(sum)) answer++;
      return;
    }

    for (let i = start; i < nums.length; i++) {
      dfs(i + 1, selected + 1, sum + nums[i]);
    }
  }

  dfs(0, 0, 0);
  return answer;
}
