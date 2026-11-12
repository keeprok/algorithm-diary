function solution(citations) {
  citations.sort((a, b) => b - a); // 많이 인용된 논문부터
  let h = 0;

  for (let i = 0; i < citations.length; i++) {
    // i+1편 이상이 citations[i]번 이상 인용되면 h를 갱신
    if (citations[i] >= i + 1) h = i + 1;
    else break; // 내림차순이라 이후는 더 작아져서 h가 커질 수 없음
  }

  return h;
}
// 1. H-Index = "h편 이상이 h번 이상 인용"인 최대 h
// 2. 내림차순 정렬하면 citations[i] >= i+1 인지만 보면 됨
// 3. 조건을 깨는 순간 break → 그 전까지의 값이 최대 h
