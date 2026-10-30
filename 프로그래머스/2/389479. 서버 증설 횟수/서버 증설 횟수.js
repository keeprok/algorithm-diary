function solution(players, m, k) {
  const n = players.length;
  const expire = Array(n + k + 1).fill(0); // t분에 만료되어 빠지는 서버 수
  let cur = 0;   // 현재 증설된 서버 수
  let answer = 0;

  for (let t = 0; t < n; t++) {
    cur += expire[t]; // 수명 k가 끝난 서버 회수
    const need = Math.floor(players[t] / m); // m명당 서버 1대

    if (cur < need) {
      const add = need - cur;
      answer += add;
      cur += add;
      expire[t + k] -= add; // k시간 뒤에 만료
    }
  }

  return answer;
}
// 1. 시각 t에 필요한 서버 수 = floor(이용자 / m)
// 2. 부족한 만큼 증설하고, 그 서버는 k시간 뒤 만료 (expire 배열)
// 3. 증설 횟수의 합이 정답
