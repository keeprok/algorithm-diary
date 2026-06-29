// 1. 귤 크기별 개수를 Map에 센다
// 2. 종류 수를 최소로 하려면 개수가 많은 크기부터 골라야 한다
// 3. Map의 value(개수)만 꺼내서 내림차순 정렬한다
// 4. 많은 개수부터 더하면서 선택한 귤 수 sum을 채운다
// 5. sum이 k 이상이 되는 순간 필요한 종류 수 kind를 return

function solution(k, tangerine) {
  const countMap = new Map();

  for (const size of tangerine) {
    countMap.set(size, (countMap.get(size) ?? 0) + 1);
  }

  const counts = [...countMap.values()].sort((a, b) => b - a);

  let sum = 0;
  let kind = 0;

  for (const count of counts) {
    sum += count;
    kind++;

    if (sum >= k) break;
  }

  return kind;
}
