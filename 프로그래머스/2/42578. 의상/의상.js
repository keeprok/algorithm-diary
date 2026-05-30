function solution(clothes) {
  const map = new Map()
    for(const [name , type] of clothes){
        map.set(type , (map.get(type)??0)+1)
    }
    let answer =1 
    for (const count of map.values()){
        answer *= count+1
    }
    return answer-1
    
}

// 1. 모자 (0~n) 상의 (0~n)이런식으로 총4종류 n+1 각 종류객체 만들기
// 2. 각개체 곱하기 단 전체 0일땐 빼기
