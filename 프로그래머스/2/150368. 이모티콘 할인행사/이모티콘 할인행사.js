function solution(users, emoticons) {
  const discounts = [10, 20, 30, 40]; // 가능한 할인율
  const m = emoticons.length;
  const combo = Array(m).fill(0);
  let best = [0, 0]; // [플러스 가입자 수, 총 매출]

  // 각 이모티콘의 할인율을 모든 경우로 완전탐색 (4^m)
  function dfs(idx) {
    if (idx === m) {
      let subscribers = 0;
      let totalSales = 0;

      for (const [rate, threshold] of users) {
        let spend = 0;
        for (let j = 0; j < m; j++) {
          // 사용자의 기준 할인율 이상이면 구매
          if (discounts[combo[j]] >= rate) {
            spend += (emoticons[j] * (100 - discounts[combo[j]])) / 100;
          }
        }
        // 누적 금액이 기준 이상이면 플러스 가입(매출엔 미포함)
        if (spend >= threshold) subscribers++;
        else totalSales += spend;
      }

      // 가입자 우선, 같으면 매출 큰 쪽
      if (subscribers > best[0] || (subscribers === best[0] && totalSales > best[1])) {
        best = [subscribers, totalSales];
      }
      return;
    }

    for (let d = 0; d < 4; d++) {
      combo[idx] = d;
      dfs(idx + 1);
    }
  }

  dfs(0);
  return best;
}
// 1. 이모티콘마다 할인율(10/20/30/40)을 모두 대입하는 완전탐색 (4^m, m≤7)
// 2. 각 조합에서 사용자별로 기준 할인율 이상인 이모티콘을 구매 → 지출 계산
// 3. 지출이 기준 이상이면 플러스 가입(가입자++), 아니면 매출에 합산
//    → [가입자 수, 매출]을 우선순위대로 비교해 최적값 반환
