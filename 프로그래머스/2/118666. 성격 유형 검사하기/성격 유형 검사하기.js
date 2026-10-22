function solution(survey, choices) {
  // 각 지표별 점수 집계
  const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    const [first, second] = survey[i].split(''); // 비동의 성향 / 동의 성향
    const c = choices[i];

    if (c < 4) score[first] += 4 - c;   // 비동의 쪽으로 기울면 first 가점
    else if (c > 4) score[second] += c - 4; // 동의 쪽이면 second 가점
    // c === 4 (모르겠음)는 점수 없음
  }

  // 지표 순서대로 더 높은 성향 선택 (동점이면 알파벳 앞)
  const pairs = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
  let answer = '';
  for (const [x, y] of pairs) {
    if (score[x] > score[y]) answer += x;
    else if (score[x] < score[y]) answer += y;
    else answer += x < y ? x : y; // 동점 → 사전 순
  }

  return answer;
}
// 1. 각 질문의 선택지(1~7)로 두 성향 중 한쪽에 가중치 부여 (4는 중립)
// 2. 4지표(RT/CF/JM/AN)별 점수를 합산
// 3. 지표마다 높은 성향 선택, 동점이면 알파벳 앞 글자 → 4글자 유형 완성
