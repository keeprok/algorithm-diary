function solution(n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += i % 2 === 0 ? "수" : "박";
  }
  return res;
}
