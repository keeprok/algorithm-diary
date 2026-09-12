function solution(s) {
  // "{{2},{2,1},...}" → 바깥 중괄호 벗기고 각 집합 파싱
  const sets = s
    .slice(2, -2)        // 앞 "{{", 뒤 "}}" 제거
    .split('},{')        // 집합 단위로 분리
    .map(g => g.split(',').map(Number));

  // 크기가 작은 집합부터 → 새로 등장하는 원소가 튜플의 다음 값
  sets.sort((a, b) => a.length - b.length);

  const answer = [];
  const seen = new Set();
  for (const set of sets) {
    for (const num of set) {
      if (!seen.has(num)) { // 이전 집합엔 없던 새 원소
        seen.add(num);
        answer.push(num);
      }
    }
  }

  return answer;
}
// 1. 문자열의 바깥 중괄호를 벗기고 "},{" 기준으로 집합들 분리
// 2. 튜플은 원소가 하나씩 늘어나므로 집합 크기 오름차순 정렬
// 3. 작은 집합부터 훑으며 처음 보는 원소를 순서대로 answer에 추가
