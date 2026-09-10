function solution(operations) {
  let queue = [];

  for (const op of operations) {
    const [cmd, numStr] = op.split(' ');
    const num = Number(numStr);

    if (cmd === 'I') {
      queue.push(num); // 삽입
    } else if (queue.length > 0) {
      queue.sort((a, b) => a - b); // 정렬 후 양 끝이 최소/최대
      if (num === 1) queue.pop();   // D 1 → 최댓값 삭제
      else queue.shift();           // D -1 → 최솟값 삭제
    }
  }

  if (queue.length === 0) return [0, 0];
  queue.sort((a, b) => a - b);
  return [queue[queue.length - 1], queue[0]]; // [최댓값, 최솟값]
}
// 1. I → 삽입, D 1 → 최댓값 삭제, D -1 → 최솟값 삭제
// 2. 삭제 시점에 정렬하면 양 끝이 최대/최소 (pop / shift)
// 3. 마지막에 비어있으면 [0,0], 아니면 [최댓값, 최솟값] 반환
