function solution(citations) {
  // 내림차순 정렬 → i번째 논문이 i+1번째로 많이 인용된 논문
  citations.sort((a, b) => b - a);

  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    // i+1편의 논문이 citations[i]번 이상 인용됨
    if (citations[i] >= i + 1) {
      h = i + 1; // h편이 h번 이상 인용 → H-Index 갱신
    } else {
      break; // 더 이상 h가 커질 수 없음
    }
  }

  return h;
}
// 1. 내림차순 정렬하면 citations[i] >= i+1 인지만 확인하면 됨
//    → i+1개의 논문이 citations[i]번 이상 인용됐다는 의미
// 2. 조건 만족하는 동안 h를 i+1로 계속 갱신
// 3. 처음 조건 불만족 시 break → 이후론 citations[i]가 더 작아져서 h가 커질 수 없음
