function solution(data, col, row_begin, row_end) {
  // 1. 정렬
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  let answer = 0;

  // 2. row_begin ~ row_end
  for (let i = row_begin; i <= row_end; i++) {
    let sum = 0;

    for (const val of data[i - 1]) {
      sum += val % i;
    }

    // 3. XOR
    answer ^= sum;
  }

  return answer;
}
