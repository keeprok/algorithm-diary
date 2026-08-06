function solution(a, b) {
  const months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 2016년 윤년
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // 1월 1일(금요일)로부터 a월 b일까지 경과한 일수
  let total = b - 1;
  for (let i = 1; i < a; i++) total += months[i];

  // 1월 1일 = 금요일 = index 5, 하루씩 더할 때마다 % 7
  return days[(total + 5) % 7];
}
// 1. 2016년은 윤년 → 2월 29일 포함
// 2. 1월 1일이 금요일(index 5)이므로 경과 일수 + 5를 7로 나눈 나머지로 요일 결정
