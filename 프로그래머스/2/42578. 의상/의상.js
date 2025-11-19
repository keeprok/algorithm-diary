function solution(clothes) {
  let hash = {};

  for (let [name, type] of clothes) {
    if (!hash[type]) hash[type] = 0;
    hash[type]++;
  }

  let result = 1;
    
  for (let type in hash) {
    result *= (hash[type] + 1); 
  }

  return result - 1;
}

// 1. 모자 (0~n) 상의 (0~n)이런식으로 총4종류 n+1 각 종류객체 만들기 
// 2. 각개체 곱하기 단 전체 0일땐 빼기
