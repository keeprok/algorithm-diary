// 1. 각 명함은 가로/세로를 돌릴 수 있다
// 2. 그래서 각 명함마다 큰 값을 가로, 작은 값을 세로라고 통일한다
// 3. 모든 명함을 담으려면 통일한 가로 중 최댓값 maxW가 필요하다
// 4. 통일한 세로 중 최댓값 maxH도 필요하다
// 5. 지갑 크기 = maxW * maxH

function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (const [w, h] of sizes) {
    const long = Math.max(w, h);
    const short = Math.min(w, h);

    maxW = Math.max(maxW, long);
    maxH = Math.max(maxH, short);
  }

  return maxW * maxH;
}