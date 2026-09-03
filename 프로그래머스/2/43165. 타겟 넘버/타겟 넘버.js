function solution(numbers, target) {
  let count = 0;

  function dfs(idx, sum) {
    // 모든 숫자를 다 쓴 경우
    if (idx === numbers.length) {
      if (sum === target) count++;
      return;
    }
    // 현재 숫자를 더하거나 빼는 두 가지 선택
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }

  dfs(0, 0);
  return count;
}
// 1. 각 숫자에 + 또는 - 를 붙이는 두 갈래 DFS → 모든 경우의 수 탐색
// 2. 마지막 인덱스 도달 시 합이 target과 같으면 count++
// 3. 숫자 개수 최대 20개 → 2^20 = 약 100만 가지 → 완전탐색 가능
