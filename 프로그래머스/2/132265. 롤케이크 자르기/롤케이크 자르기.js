function solution(topping) {
  const rightCount = {};  
  const leftSet = new Set(); 
  let rightKinds = 0;      
  let answer = 0;

  for (const t of topping) {
    if (rightCount[t] === undefined) {
      rightCount[t] = 1;
      rightKinds++;      
    } else {
      rightCount[t]++;    
    }
  }


  for (let i = 0; i < topping.length; i++) {
    const t = topping[i];


    if (!leftSet.has(t)) {
      leftSet.add(t);
    }

  
    rightCount[t]--;
    if (rightCount[t] === 0) {
      rightKinds--;      
    }

    if (leftSet.size === rightKinds) {
      answer++;
    }
  }

  return answer;
}
