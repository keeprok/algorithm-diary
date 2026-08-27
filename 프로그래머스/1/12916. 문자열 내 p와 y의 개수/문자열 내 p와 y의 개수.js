function solution(s) {
  const lower = s.toLowerCase();
  const pCount = (lower.match(/p/g) || []).length;
  const yCount = (lower.match(/y/g) || []).length;
  return pCount === yCount;
}
// 1. 대소문자 구별 없이 비교하기 위해 소문자로 변환
// 2. 정규식으로 p와 y 각각 카운트 (없으면 빈 배열로 대체)
// 3. 개수가 같으면 true, 다르면 false
