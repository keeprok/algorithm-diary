function solution(array, n) {
  let cnt = 0;
  for (const x of array) {
    if (x === n) cnt++;
  }
  return cnt;
}
