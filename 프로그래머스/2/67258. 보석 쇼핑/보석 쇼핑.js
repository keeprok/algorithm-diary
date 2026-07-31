function solution(gems) {
  const kinds = new Set(gems).size; // 보석 종류 수
  const count = {}; // 윈도우 내 보석별 개수
  let left = 0;
  let answer = [1, gems.length]; // [시작, 끝] 1-indexed

  for (let right = 0; right < gems.length; right++) {
    // 오른쪽 포인터 확장: 새 보석 추가
    count[gems[right]] = (count[gems[right]] || 0) + 1;

    // 모든 종류 포함된 동안 왼쪽 포인터 좁히기
    while (Object.keys(count).length === kinds) {
      const len = right - left;
      if (len < answer[1] - answer[0]) {
        answer = [left + 1, right + 1]; // 1-indexed
      }
      // 왼쪽 보석 제거
      count[gems[left]]--;
      if (count[gems[left]] === 0) delete count[gems[left]];
      left++;
    }
  }

  return answer;
}
// 1. 투포인터: right를 늘려 모든 보석 종류 확보, left를 줄여 최소 구간 탐색
// 2. 모든 종류가 포함된 순간 left를 좁혀 최소 길이 구간 갱신
