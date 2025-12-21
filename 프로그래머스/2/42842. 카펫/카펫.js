function solution(brown, yellow) {
  // yellow의 약수 쌍 (a, b)을 찾는다. (a >= b)
  for (let b = 1; b * b <= yellow; b++) {
    if (yellow % b !== 0) continue;

    const a = yellow / b;     
    const W = a + 2;
    const H = b + 2;

    if (W * H === brown + yellow) {
      return [W, H];
    }
  }
}
