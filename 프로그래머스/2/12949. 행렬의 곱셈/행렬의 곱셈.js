function solution(arr1, arr2) {
  const m = arr1.length;        // 결과 행 수
  const k = arr2.length;        // 내적 길이 (arr1의 열 = arr2의 행)
  const n = arr2[0].length;     // 결과 열 수

  const answer = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // result[i][j] = Σ arr1[i][x] * arr2[x][j]
      for (let x = 0; x < k; x++) {
        answer[i][j] += arr1[i][x] * arr2[x][j];
      }
    }
  }

  return answer;
}
// 1. 결과[i][j] = arr1의 i행과 arr2의 j열을 내적한 값
// 2. 3중 반복: i(행) × j(열) × x(내적 인덱스)
// 3. arr1의 열 수 = arr2의 행 수(k)가 곱셈 성립 조건
