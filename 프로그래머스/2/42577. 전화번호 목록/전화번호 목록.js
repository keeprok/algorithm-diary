// 1. phone_book을 Set에 넣어 prefix가 목록에 있는지 빠르게 확인한다
// 2. 각 번호의 prefix를 한 글자씩 만들며, 본인(num)이 아닐 때 Set에 있으면 false
// 3. 모든 번호에서 접두어 관계가 없으면 true

function solution(phone_book) {
  const set = new Set(phone_book);

  for (const num of phone_book) {
    let prefix = '';

    for (const ch of num) {
      prefix += ch;

      if (prefix !== num && set.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}
