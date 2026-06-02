function solution(array, commands) {
  const answer = []
  
  for(const [i , j , k] of commands){
    const  sliced = array.slice(i-1,j)
    const sorted = sliced.sort((a,b)=>a-b)
    answer.push(sorted[k-1])
  }
  
  return answer
}
// 0. answer 배열 생성
// 1.  array 에서 commands 배열안 순서대로 확인을해서 배열안배열에서 i번째에서 j번째까지 추출
// 2. sort min 으로 최소단위로 정렬을 한뒤 거기서부터 k 번째의 수를  answer에 push 
// 3. 반복후 return