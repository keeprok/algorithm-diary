function solution(today, terms, privacies) {
  // 날짜를 일수로 변환 (월=28일 고정)
  const toDay = (date) => {
    const [y, m, d] = date.split('.').map(Number);
    return y * 12 * 28 + m * 28 + d;
  };

  // 약관 종류별 유효기간(월) 맵 생성
  const termMap = {};
  for (const term of terms) {
    const [type, months] = term.split(' ');
    termMap[type] = Number(months);
  }

  const todayDay = toDay(today);
  const answer = [];

  privacies.forEach((privacy, i) => {
    const [date, type] = privacy.split(' ');
    // 수집일 + 유효기간(월 → 일) = 만료일
    const expiry = toDay(date) + termMap[type] * 28;
    // 오늘이 만료일 이상이면 파기 대상
    if (todayDay >= expiry) answer.push(i + 1);
  });

  return answer;
}
// 1. 날짜를 총 일수로 변환해 대소 비교 (월=28일 고정이라 단순 계산 가능)
// 2. 수집일 + 유효기간*28 < 오늘이면 파기 대상 → 1-indexed 번호 저장
