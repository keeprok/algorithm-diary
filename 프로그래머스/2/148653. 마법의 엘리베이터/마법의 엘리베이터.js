function solution(storey) {
  let answer = 0;

  while (storey > 0) {
    const digit = storey % 10;
    const next = Math.floor(storey / 10) % 10;

    if (digit < 5) {
      answer += digit;
      storey = Math.floor(storey / 10);
    } else if (digit > 5) {
      answer += 10 - digit;
      storey = Math.floor(storey / 10) + 1;
    } else {
      // digit === 5
      if (next >= 5) {
        answer += 5;
        storey = Math.floor(storey / 10) + 1;
      } else {
        answer += 5;
        storey = Math.floor(storey / 10);
      }
    }
  }

  return answer;
}