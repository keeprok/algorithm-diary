function solution(skill, skill_trees) {
  return skill_trees.filter(tree => {
    // 스킬트리에서 선행 스킬 순서에 포함된 스킬만 순서대로 추출
    const filtered = tree.split('').filter(s => skill.includes(s)).join('');
    // 추출된 순서가 skill 앞부분과 일치해야 유효한 스킬트리
    return skill.startsWith(filtered);
  }).length;
}
// 1. 각 스킬트리에서 선행 스킬(skill)에 포함된 문자만 순서대로 뽑아냄
// 2. 뽑힌 문자열이 skill의 접두사이면 → 선행 조건을 지킨 유효한 트리
//    ex) skill="CBD", tree="BACDE" → 뽑으면 "CBD" → "CBD".startsWith("CBD") → true
//    ex) skill="CBD", tree="CABE" → 뽑으면 "CB" → "CBD".startsWith("CB") → true
//    ex) skill="CBD", tree="DBCE" → 뽑으면 "DBC" → "CBD".startsWith("DBC") → false
