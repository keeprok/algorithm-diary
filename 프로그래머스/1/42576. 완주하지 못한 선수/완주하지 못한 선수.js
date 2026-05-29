// completion에 있는 이름을 participant에서 하나씩 제거(매칭)한 뒤
// participant에 남은 1명을 return

function solution(participant, completion) {
  const map = new Map();

  for (const name of participant) {
    map.set(name, (map.get(name) ?? 0) + 1);
  }

  for (const name of completion) {
    map.set(name, map.get(name) - 1);
  }
  for (const [name, count] of map) {
    if (count === 1) {
      return name;
    }
  }
}
