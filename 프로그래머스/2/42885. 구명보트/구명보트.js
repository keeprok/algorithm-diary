function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    // 가장 가벼운 사람 + 가장 무거운 사람이 같이 탈 수 있으면 같이
    if (people[left] + people[right] <= limit) left++;
    right--; // 무거운 사람은 이번 보트에 무조건 탑승
    boats++;
  }

  return boats;
}
// 1. 오름차순 정렬 후 양 끝 투포인터
// 2. 가벼운+무거운 ≤ limit 이면 둘 다 탑승(left++), 아니면 무거운 사람만
// 3. 보트는 최대 2명 → 매 반복마다 보트 1척, 최소 척수가 정답
