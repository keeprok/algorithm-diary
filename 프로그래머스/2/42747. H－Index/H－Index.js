function solution(citations) {
  // 1. 내림차순 정렬
  citations.sort((a, b) => b - a);

  let h = 0;

  // 2. 왼쪽부터 보면서 조건 확인
  for (let i = 0; i < citations.length; i++) {
    const paperCount = i + 1;      // 지금까지 본 논문 수
    const citation = citations[i]; // 현재 논문의 인용 수

    if (citation >= paperCount) {
      h = paperCount;  // 조건을 만족하면 h 갱신
    } else {
      // 더 이상 증가 못함. 뒤로 갈수록 인용수는 더 작으니까
      break;
    }
  }

  return h;
}
