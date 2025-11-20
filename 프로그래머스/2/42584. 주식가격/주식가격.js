function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {

    let count = 0;  

    for (let j = i + 1; j < prices.length; j++) {

      count++;  

      if (prices[i] > prices[j]) {
        break;  
      }
    }

    answer.push(count);
  }

  return answer;
}
// 1. prices[i] 보다 더적은숫자가 올때 return 
// 2. for 돌려서 prices[j] 보다 작을때 return  j-i 답
// 3. 단 끝까지 돌려서 없으면 prices.length-i-1 