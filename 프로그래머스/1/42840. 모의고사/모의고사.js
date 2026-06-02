function solution(answers) {
    const one = [1,2,3,4,5]
    const two = [2, 1, 2, 3, 2, 4, 2, 5]
    const three = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let scores = [0,0,0]
    
    for(let i = 0 ; i<answers.length ; i++ ){
        if(answers[i] === one[i %one.length])scores[0]++;
        if(answers[i] === two[i %two.length])scores[1]++;
        if(answers[i] === three[i %three.length])scores[2]++;
    }
   const maxScore = Math.max(...scores)
   
   const result = []
    for(let i =0 ;i < scores.length ; i++){
        if(scores[i]===maxScore)result.push(i+1)
    }   
    
    return result;
}
// 1. 각 수포자의 반복 패턴 배열과 점수(scores)를 만든다
// 2. answers를 순회하면서 문제번호 % 패턴길이로 각 수포자 답을 비교해 점수를 올린다
// 3. scores에서 최대 점수를 구하고, 최대점수와 같은 수포자 번호를 answer에 담아 return