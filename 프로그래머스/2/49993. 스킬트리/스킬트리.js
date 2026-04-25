function solution(skill, skill_trees) {
  let answer = 0;

  for (const tree of skill_trees) {
    let order = "";

    for (const char of tree) {
      if (skill.includes(char)) {
        order += char;
      }
    }

    if (skill.startsWith(order)) {
      answer++;
    }
  }

  return answer;
}