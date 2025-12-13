function solution(N, stages) {
  const count = Array(N + 2).fill(0); 
  for (const s of stages) count[s]++;

  let reach = stages.length;
  const arr = [];

  for (let i = 1; i <= N; i++) {
    const fail = count[i];
    const rate = reach === 0 ? 0 : fail / reach;
    arr.push([i, rate]);
    reach -= fail;
  }

  arr.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1]; 
    return a[0] - b[0];                  
  });

  return arr.map(([stage]) => stage);
}
