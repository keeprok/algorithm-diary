function solution(n) {
  const oneCnt = (x) => {
    let c = 0;
    while (x > 0) {
      if (x % 2 === 1) c++;
      x = Math.floor(x / 2);
    }
    return c;
  };

  const target = oneCnt(n);
  let x = n + 1;

  while (oneCnt(x) !== target) x++;
  return x;
}