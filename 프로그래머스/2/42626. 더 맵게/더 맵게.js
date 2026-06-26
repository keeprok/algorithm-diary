// 1. 가장 작은 스코빌 2개를 계속 꺼내야 하므로 최소 힙을 사용한다
// 2. 힙에 모든 scoville 값을 넣는다
// 3. 가장 작은 값(heap.peek())이 K보다 작으면 섞기를 반복한다
// 4. 가장 작은 값 first, 두 번째로 작은 값 second를 pop 한다
// 5. 새 음식 = first + second * 2 를 다시 힙에 넣는다
// 6. 섞을 때마다 answer++ 한다
// 7. 모든 음식이 K 이상이면 answer, 불가능하면 -1 return

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] <= this.heap[index]) break;

      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let smallest = index;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  let answer = 0;

  for (const score of scoville) {
    heap.push(score);
  }

  while (heap.size() > 1 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();

    heap.push(first + second * 2);
    answer++;
  }

  return heap.peek() >= K ? answer : -1;
}
