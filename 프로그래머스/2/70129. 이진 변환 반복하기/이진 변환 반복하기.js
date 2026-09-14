function solution(s) {
  let count = 0;      // 이진 변환 횟수
  let removed = 0;    // 제거된 0의 개수

  // s가 "1"이 될 때까지 반복
  while (s !== '1') {
    const beforeLen = s.length;
    s = s.replace(/0/g, '');       // 모든 0 제거
    removed += beforeLen - s.length; // 제거된 0의 개수 누적

    s = s.length.toString(2);       // 남은 길이(1의 개수)를 이진수로 변환
    count++;
  }

  return [count, removed];
}
// 1. 0을 모두 제거하고, 제거한 0의 개수를 누적
// 2. 남은 1의 개수(문자열 길이)를 이진수로 변환 → 한 번의 변환
// 3. s가 "1"이 될 때까지 반복 → [변환 횟수, 제거된 0의 총 개수]
