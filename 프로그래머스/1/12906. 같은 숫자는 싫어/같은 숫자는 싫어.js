// 1. arr를 앞에서부터 돌면서, 지금 숫자와 바로 다음 숫자를 비교한다
// 2. 같으면 answer에 넣지 않고, 다르면 지금 숫자를 answer에 넣는다
// 3. 마지막 숫자는 루프에서 빠질 수 있으므로 따로 넣고 return 한다

function solution(arr) {
  const answer = [];

  for (let count = 0; count < arr.length - 1; count++) {
    if (arr[count] !== arr[count + 1]) {
      answer.push(arr[count]);
    }
  }

  answer.push(arr[arr.length - 1]);
  return answer;
}
