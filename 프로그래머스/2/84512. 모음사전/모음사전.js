function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const dict = [];

  // 사전 순서대로 모든 단어를 DFS로 생성 (길이 5 이하)
  function dfs(current) {
    if (current.length > 5) return;
    if (current.length > 0) dict.push(current); // 빈 문자열 제외

    for (const v of vowels) {
      dfs(current + v); // A→E→I→O→U 순서로 재귀 → 사전 순 생성
    }
  }

  dfs('');
  return dict.indexOf(word) + 1; // 1-based 순서
}
// 1. 모음을 A,E,I,O,U 순서로 DFS 생성 → 만들어지는 순서가 곧 사전 순서
// 2. 길이 5 이하의 모든 단어를 dict에 순서대로 저장
// 3. word의 인덱스 + 1 이 사전에서 몇 번째인지
