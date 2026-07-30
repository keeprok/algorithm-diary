function solution(x, y, n) {
  // BFS로 x에서 y까지 최소 변환 횟수 탐색
  if (x === y) return 0;

  const visited = new Set([x]);
  const queue = [[x, 0]]; // [현재 값, 변환 횟수]

  while (queue.length) {
    const [cur, count] = queue.shift();

    // 가능한 3가지 연산 결과
    const nexts = [cur + n, cur * 2, cur * 3];

    for (const next of nexts) {
      if (next === y) return count + 1;
      // y 이하이고 방문 안 한 값만 큐에 추가 (y 초과는 의미 없음)
      if (next < y && !visited.has(next)) {
        visited.add(next);
        queue.push([next, count + 1]);
      }
    }
  }

  // y에 도달할 수 없는 경우
  return -1;
}
// 1. BFS로 각 단계에서 +n, ×2, ×3 세 가지 연산 시도
// 2. 처음 y에 도달한 순간의 변환 횟수가 최솟값 (BFS 특성)
