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
    let idx = this.heap.length - 1;

    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);

      if (this.heap[parent] <= this.heap[idx]) break;

      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  let answer = 0;

  for (const s of scoville) {
    heap.push(s);
  }

  while (heap.size() > 1 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();

    heap.push(first + second * 2);
    answer++;
  }

  return heap.peek() >= K ? answer : -1;
}