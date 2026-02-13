function solution(numbers, hand) {
  const pos = {
    1:[0,0],2:[0,1],3:[0,2],
    4:[1,0],5:[1,1],6:[1,2],
    7:[2,0],8:[2,1],9:[2,2],
    '*':[3,0],0:[3,1],'#':[3,2],
  };

  let L = '*', R = '#';
  let res = "";

  const dist = (a, b) => {
    const [ax, ay] = pos[a];
    const [bx, by] = pos[b];
    return Math.abs(ax - bx) + Math.abs(ay - by);
  };

  for (const x of numbers) {
    if (x === 1 || x === 4 || x === 7) {
      res += "L"; L = x;
    } else if (x === 3 || x === 6 || x === 9) {
      res += "R"; R = x;
    } else {
      const dl = dist(L, x);
      const dr = dist(R, x);
      if (dl < dr) { res += "L"; L = x; }
      else if (dr < dl) { res += "R"; R = x; }
      else {
        if (hand === "left") { res += "L"; L = x; }
        else { res += "R"; R = x; }
      }
    }
  }
  return res;
}
