function solution(progresses, speeds) {
 
  const days = progresses.map((p, i) => {
    const remain = 100 - p;
    return Math.ceil(remain / speeds[i]);
  });

 
  const result = [];
  let current = days[0];
  let cnt = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= current) {
    
      cnt++;
    } else {
    
      result.push(cnt);
      current = days[i];
      cnt = 1;
    }
  }

  result.push(cnt);
  return result;
}
