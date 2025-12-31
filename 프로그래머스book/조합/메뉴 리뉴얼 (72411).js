/*{1. 각 주문 문자열은 조합을 만들기 전에 정렬해야 함

 - "BA"와 "AB"가 같은 조합인데, 정렬 안 하면 다른 문자열로 카운팅될 수 있음.

2. course에 있는 길이 k마다:

- 모든 주문에서 길이 k 조합을 전부 뽑아서 Map으로 빈도 카운트

- 그 중 **최대 빈도(max)**를 찾고,

- max >= 2인 조합만 정답에 추가

3. 최종 정답은 사전순 정렬해서 반환}
*/
function solution(orders, course) {
  const res = [];

  function comb(s, idx, k, cur, map) {
    if (cur.length === k) {
      map.set(cur, (map.get(cur) || 0) + 1);
      return;
    }
    for (let i = idx; i < s.length; i++) {
      comb(s, i + 1, k, cur + s[i], map);
    }
  }

  const ord = orders.map((o) => o.split('').sort().join(''));

  for (const k of course) {
    const map = new Map();

    for (const s of ord) {
      if (s.length < k) continue;
      comb(s, 0, k, '', map);
    }

    let max = 0;
    for (const v of map.values()) {
      if (v > max) max = v;
    }

    if (max >= 2) {
      for (const [key, v] of map.entries()) {
        if (v === max) res.push(key);
      }
    }
  }

  return res.sort();
}
