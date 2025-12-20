function solution(s) {
  
  const parts = s.slice(2, -2).split("},{");

 
  const sets = parts.map(p => p.split(",").map(Number));


  sets.sort((a, b) => a.length - b.length);


  const used = new Set();
  const result = [];

  for (const arr of sets) {
    for (const num of arr) {
      if (!used.has(num)) {
        used.add(num);
        result.push(num);
      }
    }
  }

  return result;
}
