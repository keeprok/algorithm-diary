function solution(orders, course) {
  const ans = [];

  
  function go(s, idx, k, cur, map) {
    if (cur.length === k) {
      map.set(cur, (map.get(cur) || 0) + 1);
      return;
    }
    for (let i = idx; i < s.length; i++) {
      go(s, i + 1, k, cur + s[i], map);
    }
  }


  const ord = orders.map(o => o.split("").sort().join(""));

  for (const k of course) {
    const map = new Map();


    for (const s of ord) {
      if (s.length < k) continue;
      go(s, 0, k, "", map);
    }

    let mx = 0;
    for (const v of map.values()) mx = Math.max(mx, v);


    if (mx >= 2) {
      for (const [key, v] of map.entries()) {
        if (v === mx) ans.push(key);
      }
    }
  }

  return ans.sort();
}
