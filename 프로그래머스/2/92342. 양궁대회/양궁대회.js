function solution(n, info) {
  let bestDiff = 0;
  let best = null;

  function calcDiff(arr) {
    let r = 0, a = 0;
    for (let i = 0; i < 11; i++) {
      if (arr[i] === 0 && info[i] === 0) continue;
      if (arr[i] > info[i]) r += (10 - i);
      else a += (10 - i);
    }
    return r - a;
  }

  function isBetter(a, b) {
    for (let i = 10; i >= 0; i--) {
      if (a[i] !== b[i]) return a[i] > b[i];
    }
    return false;
  }

  function dfs(idx, used, shot) {
    if (used > n) return;

    if (idx === 11) {
      if (used !== n) return;
      const diff = calcDiff(shot);
      if (diff <= 0) return;

      if (diff > bestDiff || (diff === bestDiff && isBetter(shot, best))) {
        bestDiff = diff;
        best = shot.slice();
      }
      return;
    }

 
    if (idx === 10) {
      const copy = shot.slice();
      copy[idx] = n - used;
      dfs(11, n, copy);
      return;
    }


    const need = info[idx] + 1;
    if (used + need <= n) {
      const copy = shot.slice();
      copy[idx] = need;
      dfs(idx + 1, used + need, copy);
    }


    dfs(idx + 1, used, shot);
  }

  dfs(0, 0, Array(11).fill(0));
  return best ? best : [-1];
}
