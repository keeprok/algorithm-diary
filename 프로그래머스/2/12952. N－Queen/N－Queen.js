function solution(n) {
  let ans = 0;

  const col = Array(n).fill(false);         
  const diag1 = Array(2 * n).fill(false);   
  const diag2 = Array(2 * n).fill(false);  

  function dfs(r) {
    if (r === n) {
      ans++;
      return;
    }

    for (let c = 0; c < n; c++) {
      const d1 = r - c + n;
      const d2 = r + c;

      if (col[c] || diag1[d1] || diag2[d2]) continue;

      col[c] = diag1[d1] = diag2[d2] = true;
      dfs(r + 1);
      col[c] = diag1[d1] = diag2[d2] = false;
    }
  }

  dfs(0);
  return ans;
}
