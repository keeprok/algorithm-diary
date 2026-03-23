function solution(s) {
  let count = 0;
  let removedZero = 0;

  while (s !== "1") {
    const oneCount = s.split("").filter(char => char === "1").length;
    removedZero += s.length - oneCount;
    s = oneCount.toString(2);
    count++;
  }

  return [count, removedZero];
}