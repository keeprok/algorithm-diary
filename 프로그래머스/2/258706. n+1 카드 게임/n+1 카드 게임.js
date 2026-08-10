function solution(coin, cards) {
  const n = cards.length;
  const target = n + 1;
  const handSize = Math.floor(n / 3);

  const hand = new Set(cards.slice(0, handSize));       // 내 초기 손패
  const deck = cards.slice(handSize * 2);               // 공용 더미 (순서대로 공개)

  let deckIdx = 0;
  let answer = 0;

  function removePair() {
    for (const card of hand) {
      const need = target - card;
      if (need !== card && hand.has(need)) {
        hand.delete(card);
        hand.delete(need);
        return true;
      }
    }
    return false;
  }

  while (true) {
    // 0코인: 손패에 이미 합=n+1 페어 있으면 제거 후 라운드 성공
    if (removePair()) { answer++; continue; }

    if (coin >= 1 && deckIdx < deck.length) {
      const c1 = deck[deckIdx];

      // 1코인: 덱 1장으로 페어 완성
      if (hand.has(target - c1)) {
        hand.delete(target - c1);
        coin--;
        deckIdx++;
        answer++;
        continue;
      }

      // 2코인: 덱 2장으로 페어 완성
      if (coin >= 2 && deckIdx + 1 < deck.length) {
        const c2 = deck[deckIdx + 1];
        if (c1 + c2 === target) {
          // 두 덱 카드끼리 페어
          coin -= 2;
          deckIdx += 2;
          answer++;
          continue;
        }
        if (hand.has(target - c2)) {
          // c2로 손패와 페어, c1은 손패에 남김
          hand.add(c1);
          hand.delete(target - c2);
          coin -= 2;
          deckIdx += 2;
          answer++;
          continue;
        }
      }
    }

    break;
  }

  return answer;
}
// 1. 코인을 아껴야 더 오래 버팀 → 0코인 → 1코인 → 2코인 순으로 시도 (그리디)
// 2. 덱 카드는 순서대로만 뽑을 수 있고, 1장 또는 2장 선택
// 3. 어떤 방법으로도 합=n+1 페어를 못 만들면 게임 종료
