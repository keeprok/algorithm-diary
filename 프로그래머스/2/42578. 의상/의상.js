// 1. 모자 (0~n) 상의 (0~n)이런식으로 종류별 n+1 선택지 만들기
// 2. 각 종류 (개수 + 1)을 곱하고, 전부 안 입는 경우 1을 빼서 return

function solution(clothes) {
  const map = new Map();
  for (const [name, type] of clothes) {
    map.set(type, (map.get(type) ?? 0) + 1);
  }
  let answer = 1;
  for (const count of map.values()) {
    answer *= count + 1;
  }
  return answer - 1;
}
