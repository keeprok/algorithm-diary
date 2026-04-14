function solution(s, skip, index) {
  const skipSet = new Set(skip);

  return s
    .split("")
    .map((char) => {
      let current = char;
      let count = 0;

      while (count < index) {
        current = current === "z"
          ? "a"
          : String.fromCharCode(current.charCodeAt(0) + 1);

        if (!skipSet.has(current)) {
          count++;
        }
      }

      return current;
    })
    .join("");
}
