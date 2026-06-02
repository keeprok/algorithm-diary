// 실전 제출용(가독성 추천): yellow 약수쌍 기반
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

// 비교용(수식 유도 버전)
function solutionByFormula(brown, yellow) {
  const total = brown + yellow;

  for (let h = 3; h <= Math.sqrt(total); h++) {
    if (total % h !== 0) continue;

    const w = total / h;
    if (w < h) continue;

    if (2 * w + 2 * h - 4 === brown) {
      return [w, h];
    }
  }
}

// 1. 갈색은 테두리라서 brown = 2w + 2h - 4
// 2. 전체 칸은 brown + yellow = w * h, 단 w >= h
