function solution(arr1, arr2) {
  const n = arr1.length;
  const m = arr1[0].length;
  const res = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return res;
}
