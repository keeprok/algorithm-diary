function solution(lottos, win_nums) {
  const win = new Set(win_nums);

  let zero = 0;
  let hit = 0;

  for (const x of lottos) {
    if (x === 0) zero++;
    else if (win.has(x)) hit++;
  }

  const rank = (c) => {
    if (c >= 6) return 1;
    if (c === 5) return 2;
    if (c === 4) return 3;
    if (c === 3) return 4;
    if (c === 2) return 5;
    return 6;
  };

  return [rank(hit + zero), rank(hit)];
}

