function solution(people, limit) {
  // 오름차순 정렬 후 투포인터 (가장 가벼운 + 가장 무거운 쌍 시도)
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let answer = 0;

  while (left <= right) {
    // 가장 가벼운 + 가장 무거운이 limit 이하면 같이 탑승
    if (people[left] + people[right] <= limit) {
      left++;
    }
    // 어차피 무거운 사람은 이번 보트로 이동 (혼자든 둘이든)
    right--;
    answer++;
  }

  return answer;
}
// 1. 오름차순 정렬 후 양 끝 투포인터
// 2. 가장 가벼운 + 가장 무거운 합이 limit 이하 → 둘 다 탑승, left++
//    초과 → 무거운 사람 혼자 탑승 (가장 가벼운 사람이 같이 탈 수 없으면 아무도 못 탐)
// 3. 매 반복마다 보트 1개 사용 → right--
