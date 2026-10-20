function solution(begin, end) {
  const answer = [];

  for (let i = begin; i <= end; i++) {
    if (i === 1) { answer.push(0); continue; } // 1번 자리엔 블록 없음

    // i의 가장 작은 약수(f, 2 이상)를 찾으면 가장 큰 진약수 = i/f
    let largest = 1; // 소수면 진약수가 1뿐
    for (let f = 2; f * f <= i; f++) {
      if (i % f === 0) { largest = i / f; break; }
    }
    // 블록 번호는 10,000,000 이하만 가능 (i/f ≤ i/2 라 범위 내 보장)
    answer.push(largest);
  }

  return answer;
}
// 1. k번 블록은 2k,3k,... 자리에 놓이고 각 자리는 가장 큰 블록 번호를 가짐
//    → i번 자리의 값 = i의 "가장 큰 진약수"
// 2. 가장 큰 진약수 = i / (i의 가장 작은 소인수) → √i까지만 탐색
// 3. 소수면 진약수가 1뿐, 1번 자리는 블록 없음(0)
