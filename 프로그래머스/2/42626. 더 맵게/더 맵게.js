function solution(scoville, K) {
  // 오름차순 정렬로 최소힙처럼 관리 (가장 작은 값이 앞에)
  const heap = [...scoville].sort((a, b) => a - b);
  let count = 0;

  while (heap[0] < K) {
    if (heap.length < 2) return -1; // 섞을 음식이 1개뿐 → 불가능

    const first = heap.shift();
    const second = heap.shift();
    const mixed = first + second * 2;

    // 이분탐색으로 정렬된 위치에 삽입 (정렬 상태 유지)
    let lo = 0, hi = heap.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (heap[mid] < mixed) lo = mid + 1;
      else hi = mid;
    }
    heap.splice(lo, 0, mixed);
    count++;
  }

  return count;
}
// 1. 오름차순 배열을 최소힙처럼 활용 → 항상 가장 안 매운 음식 2개를 꺼냄
// 2. 섞기: mixed = 첫 번째 + 두 번째 * 2 → 이분탐색으로 정렬 위치에 삽입
// 3. 최솟값이 K 이상이 될 때까지 반복, 불가능하면 -1
