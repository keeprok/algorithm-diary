function solution(numbers) {
  var answer = [];

  // 1. 배열에서 2개의 수를 뽑기 (중복X)
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 2. 두 수의 합을 구함
      const sum = numbers[i] + numbers[j];

      // 3. 이미 있는 합이 아니라면 추가 (중복 방지)
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }

  // 4. 오름차순 정렬
  answer.sort((a, b) => a - b);

  // 5. 반환
  return answer;
}

// 1. 배열에서 2개의 수를 뽑는데 한번뽑은 수는 다음번에는뽑지않는다 (무작위로하면 겹칠수도있으니 0 부터 끝까지하며될듯)
// 2. 0~5 1~5 2~5 이렇게 하면될듯? > for(i=0 i< number.length i++) {for(j= i+1 j<number.length j++){number[i]+nubmer[j]}
//3. 이미 있는 합이 아니라면 추가 (중복 방지)