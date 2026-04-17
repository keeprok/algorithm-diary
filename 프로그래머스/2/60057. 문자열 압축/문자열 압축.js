function solution(s) {
  if (s.length === 1) return 1;

  let answer = s.length;

  for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
    let compressed = "";
    let prev = s.slice(0, unit);
    let count = 1;

    for (let i = unit; i < s.length; i += unit) {
      const current = s.slice(i, i + unit);

      if (current === prev) {
        count++;
      } else {
        compressed += (count > 1 ? count : "") + prev;
        prev = current;
        count = 1;
      }
    }

    compressed += (count > 1 ? count : "") + prev;
    answer = Math.min(answer, compressed.length);
  }

  return answer;
}