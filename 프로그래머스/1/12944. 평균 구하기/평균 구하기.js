function solution(arr) {
  return arr.reduce((sum, n) => sum + n, 0) / arr.length;
}
// 1. reduce로 배열 합산 후 길이로 나눔
