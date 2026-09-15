function solution(topping) {
  // 오른쪽 조각의 토핑 종류별 개수 (전체로 초기화)
  const right = new Map();
  for (const t of topping) {
    right.set(t, (right.get(t) || 0) + 1);
  }

  const left = new Set(); // 왼쪽 조각의 토핑 종류
  let answer = 0;

  for (let i = 0; i < topping.length - 1; i++) {
    // 현재 토핑을 왼쪽으로 이동
    left.add(topping[i]);
    right.set(topping[i], right.get(topping[i]) - 1);
    if (right.get(topping[i]) === 0) right.delete(topping[i]); // 개수 0이면 종류 제거

    // 왼쪽 종류 수 == 오른쪽 종류 수이면 공평
    if (left.size === right.size) answer++;
  }

  return answer;
}
// 1. 오른쪽 조각은 Map(종류별 개수), 왼쪽 조각은 Set(종류)로 관리
// 2. 자르는 위치를 왼→오로 이동하며 토핑을 오른쪽에서 왼쪽으로 옮김
//    → 오른쪽 개수가 0이 되면 종류에서 제거 (delete)
// 3. 양쪽 종류 수(left.size === right.size)가 같은 경우를 카운트
