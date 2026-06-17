// 1. people을 몸무게 오름차순 정렬한다
// 2. l = 가장 가벼운, r = 가장 무거운 (양끝 포인터)
// 3. while (l <= r) → 아직 태울 사람이 남았으면 반복
// 4. 가벼운 + 무거운 합이 limit 이하면 → 둘이 한 보트 (l++, r--)
// 5. 합이 limit 초과면 → 무거운 사람만 태움 (r-- 만)
// 6. 매 반복마다 cnt++ (보트 1대 사용)
// 7. return cnt

function solution(people, limit) {
  people.sort((a, b) => a - b);

  let l = 0;
  let r = people.length - 1;
  let cnt = 0;

  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      l++; // 가벼운 사람도 같이 탐
    }
    r--; // 무거운 사람은 항상 탐 (혼자 or 짝)
    cnt++;
  }

  return cnt;
}
