function solution(baseball) {
  let answer = 0;

  // 1~9 중 서로 다른 숫자로 이루어진 3자리 수 완전탐색 (총 9×8×7 = 504가지)
  for (let num = 123; num <= 987; num++) {
    const str = String(num);
    if (str.includes('0')) continue;
    if (new Set(str.split('')).size !== 3) continue; // 중복 숫자 제거

    let valid = true;

    for (const [q, s, b] of baseball) {
      const qStr = String(q);
      let strikes = 0, balls = 0;

      for (let i = 0; i < 3; i++) {
        if (str[i] === qStr[i]) strikes++;
        else if (str.includes(qStr[i])) balls++;
      }

      // 하나라도 힌트와 다르면 탈락
      if (strikes !== s || balls !== b) { valid = false; break; }
    }

    if (valid) answer++;
  }

  return answer;
}
// 1. 0 없고 자릿수가 모두 다른 3자리 수를 완전탐색 (504가지)
// 2. 각 후보 숫자가 모든 힌트의 스트라이크/볼 조건을 만족하면 카운트
