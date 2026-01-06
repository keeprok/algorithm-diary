function solution(users, emoticons) {
  const rates = [10, 20, 30, 40];
  const m = emoticons.length;


  const dc = Array.from({ length: m }, (_, i) =>
    rates.map(r => Math.floor(emoticons[i] * (100 - r) / 100))
  );

  let bestSub = -1;
  let bestRev = -1;


  const pick = Array(m).fill(0);

  function calc() {
    let sub = 0;
    let rev = 0;

    for (const [needRate, limit] of users) {
      let sum = 0;

      for (let i = 0; i < m; i++) {
        const r = rates[pick[i]];
        if (r >= needRate) sum += dc[i][pick[i]];
      }

      if (sum >= limit) sub++;
      else rev += sum;
    }

  
    if (sub > bestSub || (sub === bestSub && rev > bestRev)) {
      bestSub = sub;
      bestRev = rev;
    }
  }

  function dfs(i) {
    if (i === m) {
      calc();
      return;
    }

    for (let ri = 0; ri < 4; ri++) {
      pick[i] = ri;
      dfs(i + 1);
    }
  }

  dfs(0);
  return [bestSub, bestRev];
}
