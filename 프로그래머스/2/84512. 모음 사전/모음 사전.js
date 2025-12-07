function solution(word) {
    var answer = 0;
    return answer;
}function solution(word) {
  const alpha = ["A", "E", "I", "O", "U"];
  const weight = [781, 156, 31, 6, 1];  // 자리수별 가중치
  
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    const idx = alpha.indexOf(word[i]); // 해당 글자의 인덱스(A=0...)
    answer += idx * weight[i] + 1;
  }

  return answer;
}
