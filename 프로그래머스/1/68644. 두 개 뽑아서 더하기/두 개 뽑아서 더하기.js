function solution(numbers) {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(arr)].sort((a, b) => a - b);
  return answer;
}
// 1. 같은숫자를 더해서  배열을 생성 같은숫자가 있을경우 제외
// 2. 오름차순 정렬
