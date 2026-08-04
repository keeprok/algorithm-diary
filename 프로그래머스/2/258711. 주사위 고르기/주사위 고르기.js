function solution(dice) {
  const n = dice.length;
  const half = n / 2;

  // 선택된 주사위들로 나올 수 있는 모든 눈 합 분포 계산
  function calcDist(selected) {
    let dist = [0];
    for (const idx of selected) {
      const next = [];
      for (const prev of dist) {
        for (const face of dice[idx]) {
          next.push(prev + face);
        }
      }
      dist = next;
    }
    return dist;
  }

  // 이분탐색: bSorted에서 val보다 작은 수의 개수 (= A가 이기는 경우)
  function countWins(aDist, bSorted) {
    let wins = 0;
    for (const a of aDist) {
      let lo = 0, hi = bSorted.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (bSorted[mid] < a) lo = mid + 1;
        else hi = mid;
      }
      wins += lo;
    }
    return wins;
  }

  // n개 중 half개를 고르는 모든 조합 생성
  function getCombos(n, r) {
    const result = [];
    function dfs(start, cur) {
      if (cur.length === r) { result.push([...cur]); return; }
      for (let i = start; i < n; i++) {
        cur.push(i);
        dfs(i + 1, cur);
        cur.pop();
      }
    }
    dfs(0, []);
    return result;
  }

  const combos = getCombos(n, half);
  let maxWins = -1;
  let answer = [];

  for (const aSel of combos) {
    const aSet = new Set(aSel);
    const bSel = Array.from({ length: n }, (_, i) => i).filter(i => !aSet.has(i));

    const aDist = calcDist(aSel);
    const bDist = calcDist(bSel).sort((a, b) => a - b); // 이분탐색을 위해 정렬

    const wins = countWins(aDist, bDist);
    if (wins > maxWins) {
      maxWins = wins;
      answer = aSel.map(i => i + 1); // 1-indexed
    }
  }

  return answer;
}
// 1. A가 n/2개 주사위를 고르는 모든 조합을 완전탐색 (C(n, n/2), 최대 C(10,5)=252가지)
// 2. 각 조합에서 A·B의 눈 합 분포(6^(n/2)가지)를 구하고 이분탐색으로 A 승리 횟수 계산
// 3. 승리 횟수가 최대인 A의 주사위 조합을 반환 (1-indexed)
