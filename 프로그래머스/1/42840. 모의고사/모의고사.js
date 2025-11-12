function solution(answers) {
    const fir =[1,2,3,4,5]
    const sec =[2, 1, 2, 3, 2, 4, 2, 5]
    const third = [3,3,1,1,2,2,4,4,5,5]
    const scores = [0,0,0]
    // 정수화
     for (let i = 0; i < answers.length; i++) {
    if (answers[i] === fir[i % fir.length]) scores[0]++;
    if (answers[i] === sec[i % sec.length]) scores[1]++;
    if (answers[i] === third[i % third.length]) scores[2]++;
  }//반복 문
    
    const maxScore = Math.max(...scores)
    //최댓값
    
    const result = []
    for (let i = 0; i < scores.length; i++) { 
        if (scores[i] === maxScore) result.push(i + 1) 
    }//결과값
    
    return result;
}
// 1. 첫번째 인원 부터 3번째 인원배열 정수화 ex 1=[1,2,3,4,5] ,2= [2, 1, 2, 3, 2, 4, 2, 5],3 =[3,3,1,1,2,2,4,4,5,5]
// 2. 입력받는 수랑 정수 비교 및 맞춘개수 3개 배열 비교  및 가장많이맞춘 번호 저장 단 동일시 오름차순
