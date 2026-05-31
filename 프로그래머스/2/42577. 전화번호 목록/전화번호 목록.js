// 1. phone_book을 Set에 넣는다 (번호가 목록에 있는지 빠르게 찾기 위해)
// 2. phone_book 번호 하나(num)씩 꺼낸다
// 3. num을 한 글자(ch)씩 붙여서 prefix(앞부분)를 만든다
// 4. prefix가 num(본인)과 같으면 검사하지 않는다
// 5. prefix가 Set에 있으면 → 다른 번호의 접두어 → false
// 6. 모든 번호를 다 봤는데 5번이 없으면 true
function solution(phone_book) {
  // 1
  const set = new Set(phone_book);

  // 2
  for (const num of phone_book) {
    let prefix = '';

    // 3
    for (const ch of num) {
      prefix += ch;

      // 4 + 5
      if (prefix !== num && set.has(prefix)) {
        return false;
      }
    }
  }

  // 6
  return true;
}