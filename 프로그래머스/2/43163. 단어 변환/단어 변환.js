function solution(begin, target, words) {
  // target이 words에 없으면 변환 불가
  if (!words.includes(target)) return 0;

  let answer = Infinity;

  function dfs(current, count, visited) {
    // 목표 단어 도달 시 최솟값 갱신
    if (current === target) {
      answer = Math.min(answer, count);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;

      // 현재 단어와 한 글자만 다른 단어만 선택
      let diff = 0;
      for (let j = 0; j < current.length; j++) {
        if (current[j] !== words[i][j]) diff++;
      }

      if (diff === 1) {
        visited[i] = true;
        dfs(words[i], count + 1, visited);
        visited[i] = false; // 백트래킹
      }
    }
  }

  dfs(begin, 0, Array(words.length).fill(false));
  return answer === Infinity ? 0 : answer;
}
// 1. 현재 단어와 한 글자만 다른 단어로만 이동 가능 (diff === 1)
// 2. visited로 중복 방문 방지, 백트래킹으로 모든 경로 탐색 후 최솟값 반환
