function solution(n, k, enemy) {
  // 최대 힙: 지금까지 나온 적 중 가장 많은 수를 무적권으로 막기 위해 관리
  // JS에 내장 힙이 없으므로 정렬 배열로 대체 (소규모 입력에 유효)
  const heap = []; // 무적권으로 처리한 라운드의 적 수 (오름차순)

  for (let i = 0; i < enemy.length; i++) {
    heap.push(enemy[i]);
    heap.sort((a, b) => a - b); // 오름차순 유지

    if (heap.length > k) {
      // 무적권 슬롯 초과 시 가장 작은 값을 꺼내 병사로 처리
      n -= heap.shift();
    }

    // 병사가 부족하면 이 라운드까지가 한계
    if (n < 0) return i;
  }

  return enemy.length;
}
// 1. 무적권 k개를 가장 적이 많은 라운드에 쓰는 것이 최적 (그리디)
// 2. 힙(정렬 배열)으로 상위 k개 라운드를 무적권 처리, 나머지는 병사로 소모
