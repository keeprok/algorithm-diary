function solution(arr)
{
 const answer = []
 
 for (let num of arr){
     if(answer.length == 0 || answer[answer.length-1] !== num ){
         answer.push(num)
     }
 }
    return answer
}
// 1. 결과 배열 answer를 만든다
// 2. arr를 돌면서, answer 맨 뒤와 지금 숫자가 같으면 넣지 않고, 다르면 넣는다