function solution(n, s) {
  // 자연수 n개의 합이 s → 합이 같을 때 곱이 최대가 되려면 값이 최대한 균등
  if (s < n) return [-1]; // 각 원소가 최소 1인데 합이 n보다 작으면 불가능

  const q = Math.floor(s / n); // 기본값
  const r = s % n;             // 나머지는 뒤쪽 원소에 +1씩 분배

  const answer = Array(n).fill(q);
  for (let i = n - r; i < n; i++) answer[i] += 1; // 오름차순 유지하며 분배

  return answer;
}
// 1. 합이 고정일 때 곱 최대화 → 산술·기하 평균 관계상 값이 균등할수록 유리
// 2. 몫 q로 모두 채우고, 나머지 r개는 뒤쪽 원소에 +1 (오름차순 유지)
// 3. s < n이면 자연수로 만들 수 없어 [-1]
