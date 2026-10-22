function solution(data, col, row_begin, row_end) {
  // col번째 열 오름차순, 같으면 첫 열 내림차순으로 정렬
  data.sort((a, b) =>
    a[col - 1] !== b[col - 1] ? a[col - 1] - b[col - 1] : b[0] - a[0]
  );

  let result = 0;

  // row_begin ~ row_end 행에 대해 S_i 계산 후 XOR 누적
  for (let i = row_begin; i <= row_end; i++) {
    const row = data[i - 1]; // 1-based → 0-based
    let s = 0;
    for (const v of row) s += v % i; // 각 값을 행 번호 i로 나눈 나머지 합
    result ^= s;
  }

  return result;
}
// 1. col 열 기준 오름차순(동점 시 첫 열 내림차순)으로 테이블 정렬
// 2. i번째 행(1-based)의 S_i = Σ (원소 % i)
// 3. row_begin~row_end의 S_i들을 모두 XOR 한 값이 해시값
