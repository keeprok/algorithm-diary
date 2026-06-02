function solution(answers) {
    const first = [1,2,3,4,5]
    const second = [2, 1, 2, 3, 2, 4, 2, 5]
    const third = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let scores = [0,0,0]
    for (let i = 0 ; i< answers.length; i++ ){
        if(answers[i] === first[i%first.length])scores[0]++
        if(answers[i] === second[i%second.length])scores[1]++
        if(answers[i] === third[i%third.length])scores[2]++
    }
    let result = []
    const maxScores =   Math.max(...scores)
    for (let i= 0 ; i <scores.length ; i++){
        if(scores[i]=== maxScores)result.push(i+1)
    }
    return result
  
}
// 1. 각 수포자의 반복 패턴 배열과 점수(scores)를 만든다
// 2. answers를 순회하면서 문제번호 % 패턴길이로 각 수포자 답을 비교해 점수를 올린다
// 3. scores에서 최대 점수를 구하고, 최대점수와 같은 수포자 번호를 answer에 담아 return