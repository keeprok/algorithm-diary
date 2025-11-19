function solution(phone_book) {
  const set = new Set(phone_book); 

  for (let num of phone_book) {
    let prefix = "";

    for (let ch of num) {
      prefix += ch;

      if (prefix !== num && set.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}
