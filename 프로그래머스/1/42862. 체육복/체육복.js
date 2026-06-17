// 1. lost, reserve를 번호 순으로 정렬한다
// 2. reserve를 Set으로 만든다 (빌려줄 때 delete로 "이미 씀" 표시)
// 3. lost를 돌면서 reserve에 같은 번호가 있으면 → 도난+여벌 겹침 → Set에서만 지우고 넘김 (본인이 씀)
// 4. 겹치지 않은 lost만 realLost에 넣는다 (진짜 못 빌려준 애들)
// 5. realLost를 돌면서 앞번호(l-1)에 여벌 있으면 빌려주고 Set에서 delete
// 6. 없으면 뒤번호(l+1)에 여벌 있으면 빌려주고 delete
// 7. 둘 다 없으면 cannot++ (수업 못 들음)
// 8. return n - cannot (전체 - 못 듣는 사람)

function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  const reserveSet = new Set(reserve);
  const realLost = [];

  for (const l of lost) {
    if (reserveSet.has(l)) {
      reserveSet.delete(l); // 도난+여벌 겹침 → 본인이 여벌 사용
    } else {
      realLost.push(l);
    }
  }

  let cannot = 0;

  for (const l of realLost) {
    if (reserveSet.has(l - 1)) {
      reserveSet.delete(l - 1);
      continue;
    }
    if (reserveSet.has(l + 1)) {
      reserveSet.delete(l + 1);
      continue;
    }
    cannot++;
  }

  return n - cannot;
}
