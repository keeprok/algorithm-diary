function solution(arr1, arr2) {
  const r = arr1.length;       
  const k = arr1[0].length;     
  const c = arr2[0].length;     


  const result = Array.from({ length: r }, () => Array(c).fill(0));

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let sum = 0;
      for (let t = 0; t < k; t++) {
        sum += arr1[i][t] * arr2[t][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}
