function solution(elements) {
  const n = elements.length;
  const arr = elements.concat(elements);
  const set = new Set();

  for (let len = 1; len <= n; len++) {
    let sum = 0;

    for (let i = 0; i < len; i++) {
      sum += arr[i];
    }
    set.add(sum);

    for (let start = 1; start < n; start++) {
      sum = sum - arr[start - 1] + arr[start + len - 1];
      set.add(sum);
    }
  }

  return set.size;
}