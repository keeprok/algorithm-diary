// [for] 0. answer 배열 생성
// [for] 1. commands에서 [i, j, k]를 꺼내 array를 i~j까지 slice로 자른다
// [for] 2. 오름차순 정렬한 뒤 k번째(인덱스 k-1) 수를 answer에 push
// [for] 3. commands를 다 돌면 answer return
function solutionFor(array, commands) {
  const answer = [];

  for (const [i, j, k] of commands) {
    const sliced = array.slice(i - 1, j);
    const sorted = sliced.sort((a, b) => a - b);
    answer.push(sorted[k - 1]);
  }

  return answer;
}

// [map] 1. commands에서 [i, j, k]마다 array를 i~j까지 slice로 자른다
// [map] 2. 오름차순 정렬한 뒤 k번째(인덱스 k-1) 수를 결과 배열에 담는다
// [map] 3. map이 만든 배열을 return (answer 배열을 따로 만들지 않음)
function solutionMap(array, commands) {
  return commands.map(([i, j, k]) => {
    const sliced = array.slice(i - 1, j);
    sliced.sort((a, b) => a - b);
    return sliced[k - 1];
  });
}

function solution(array, commands) {
  return solutionFor(array, commands);
}
