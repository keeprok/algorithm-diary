function solution(food) {
  const left = food
    .slice(1)
    .map((count, idx) => String(idx + 1).repeat(Math.floor(count / 2)))
    .join("");

  return left + "0" + [...left].reverse().join("");
}