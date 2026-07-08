function solution(num) {
    let answer = 0;
    
   while(num !== 1 && answer < 500) {
       if(num%2 == 0){
          num = num/2
       }else {
           num = num*3 + 1
       }
       answer ++
}
   
    if (num !== 1) {  
    return -1
    }
    return answer
}
// 1. 언제까지 반복되는지 정의를 미리 할수없기때문에 while을 쓴다
// 2. num 이 1이되거나 answer이 =>500 이되면 멈춘다 