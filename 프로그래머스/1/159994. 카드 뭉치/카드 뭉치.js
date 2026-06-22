// 1. 카드 뭉치는 앞에서부터만 사용할 수 있으므로 큐처럼 생각한다
// 2. i는 cards1에서 다음으로 확인할 카드 위치, j는 cards2의 위치
// 3. goal을 앞에서부터 보면서 현재 필요한 단어를 확인한다
// 4. cards1[i]가 필요한 단어면 cards1에서 사용한 것이므로 i++
// 5. 아니면 cards2[j]가 필요한 단어인지 확인하고 맞으면 j++
// 6. 둘 다 아니면 현재 순서로는 goal을 만들 수 없으므로 "No" return
// 7. goal을 끝까지 만들었으면 "Yes" return

function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  for (const word of goal) {
    if (cards1[i] === word) {
      i++;
    } else if (cards2[j] === word) {
      j++;
    } else {
      return "No";
    }
  }

  return "Yes";
}
