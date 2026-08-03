function solution(A, B) {
  // 오름차순 정렬: 작은 차이로 이겨야 큰 수를 낭비하지 않음
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let answer = 0;
  let b = 0; // B 포인터

  for (let a = 0; a < A.length; a++) {
    // A[a]를 이길 수 있는 B의 가장 작은 수 찾기
    while (b < B.length && B[b] <= A[a]) b++;
    if (b < B.length) {
      answer++;
      b++;
    }
  }

  return answer;
}
// 1. 두 배열을 오름차순 정렬 후 투포인터로 매칭
// 2. A의 가장 작은 수부터 이길 수 있는 B의 최솟값을 배정 (그리디)
// 3. 작은 차이로 이기면 큰 B 수가 남아 더 어려운 상대도 대응 가능
