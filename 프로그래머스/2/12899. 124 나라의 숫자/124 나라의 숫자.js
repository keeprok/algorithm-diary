function solution(n) {
  let answer = '';
  const digit = ['4', '1', '2']; // 나머지 0,1,2 → 4,1,2

  while (n > 0) {
    const r = n % 3;
    answer = digit[r] + answer;
    n = Math.floor((n - 1) / 3); // 0이 없는 3진법: 자리를 내릴 때 -1
  }

  return answer;
}
// 1. 124 나라는 0 없이 1,2,4만 쓰는 3진법
// 2. n%3이 1→"1", 2→"2", 0→"4" (3의 배수는 끝자리가 4)
// 3. 다음 자릿수는 (n-1)/3 으로 내려가며 n이 0이 될 때까지 반복
