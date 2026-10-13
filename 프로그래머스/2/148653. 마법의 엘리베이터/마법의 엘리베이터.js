function solution(storey) {
  let answer = 0;

  // 뒷자리부터 하나씩 처리 (내려갈지 vs 올려서 올림할지 선택)
  while (storey > 0) {
    const d = storey % 10;
    storey = Math.floor(storey / 10);

    // 5 초과거나, 5인데 윗자리도 5 이상이면 올림(+1)이 유리
    if (d > 5 || (d === 5 && storey % 10 >= 5)) {
      answer += 10 - d; // 위로 올리는 버튼 횟수
      storey += 1;      // 올림 발생
    } else {
      answer += d;      // 아래로 내리는 버튼 횟수
    }
  }

  return answer;
}
// 1. 각 자릿수 d마다 "d만큼 내리기" vs "(10-d)만큼 올리고 윗자리 올림" 중 적은 쪽 선택
// 2. d>5면 올림이 이득, d<5면 내림이 이득
// 3. d==5 동점이면 윗자리가 5 이상일 때만 올림 → 전체 버튼 횟수 최소화 (그리디)
