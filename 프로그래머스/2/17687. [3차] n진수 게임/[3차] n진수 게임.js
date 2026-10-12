function solution(n, t, m, p) {
  // 0부터 n진수로 변환해 이어 붙인 긴 문자열 생성 (필요 길이 m*t 이상)
  let digits = '';
  let num = 0;
  while (digits.length < m * t) {
    digits += num.toString(n).toUpperCase(); // 10~15는 A~F
    num++;
  }

  // p번째 사람은 (p-1), (p-1 + m), (p-1 + 2m) ... 위치의 숫자를 말함
  let answer = '';
  for (let i = 0; i < t; i++) {
    answer += digits[(p - 1) + i * m];
  }

  return answer;
}
// 1. 0,1,2,... 를 n진수로 바꿔 이어 붙인 수열 문자열을 충분히(m*t) 생성
// 2. toString(n)은 10~15를 소문자로 주므로 toUpperCase()로 A~F 변환
// 3. p번째 참가자는 m칸 간격으로 t개를 말함 → (p-1)+i*m 위치 추출
