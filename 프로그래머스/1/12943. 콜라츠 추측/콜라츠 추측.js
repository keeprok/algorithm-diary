function solution(num) {
  let cnt = 0;
  let x = num;

  while (x !== 1 && cnt < 500) {
    if (x % 2 === 0) x = x / 2;
    else x = x * 3 + 1;
    cnt++;
  }

  return x === 1 ? cnt : -1;
}
