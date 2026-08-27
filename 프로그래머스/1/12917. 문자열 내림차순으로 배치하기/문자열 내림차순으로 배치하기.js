function solution(s) {
  return s.split('').sort().reverse().join('');
}
// 1. 문자 배열로 분리 후 sort() → 사전순(오름차순) 정렬
// 2. reverse() → 내림차순 (대문자 < 소문자 순서이므로 소문자가 앞에 옴)
// 3. join('')으로 다시 합치기
