// 1. want와 number를 Map으로 묶어 필요한 상품 개수를 저장한다
// 2. 회원가입하면 10일 동안 할인 상품을 살 수 있으므로 길이 10의 구간을 확인한다
// 3. windowMap에는 현재 10일 구간의 상품 개수를 저장한다
// 4. 처음 10일 구간을 먼저 Map에 채운다
// 5. needMap과 windowMap의 상품 개수가 모두 같으면 가능한 시작일이므로 answer++
// 6. 다음 시작일로 이동할 때 앞 상품은 빼고, 새로 들어오는 뒤 상품은 더한다
// 7. 모든 10일 구간을 확인한 뒤 answer return

function solution(want, number, discount) {
  const needMap = new Map();

  for (let i = 0; i < want.length; i++) {
    needMap.set(want[i], number[i]);
  }

  const windowMap = new Map();

  const add = (item, delta) => {
    windowMap.set(item, (windowMap.get(item) ?? 0) + delta);

    if (windowMap.get(item) === 0) {
      windowMap.delete(item);
    }
  };

  const isMatch = () => {
    for (const [item, count] of needMap) {
      if ((windowMap.get(item) ?? 0) !== count) return false;
    }

    return true;
  };

  if (discount.length < 10) return 0;

  for (let i = 0; i < 10; i++) {
    add(discount[i], 1);
  }

  let answer = isMatch() ? 1 : 0;

  for (let start = 1; start <= discount.length - 10; start++) {
    add(discount[start - 1], -1);
    add(discount[start + 9], 1);

    if (isMatch()) answer++;
  }

  return answer;
}
