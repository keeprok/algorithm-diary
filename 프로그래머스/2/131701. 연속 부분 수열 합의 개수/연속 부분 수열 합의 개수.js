// 1. 원형 수열이므로 elements를 한 번 더 붙여서 원형 구간을 일반 배열처럼 만든다
// 2. Set에 만들 수 있는 연속 부분 수열의 합을 저장한다
// 3. 길이 len을 1부터 n까지 바꿔가며 모든 구간을 확인한다
// 4. 각 len마다 처음 구간 합을 먼저 구해서 Set에 넣는다
// 5. 다음 시작점으로 이동할 때는 앞 값을 빼고 새 뒤 값을 더해 합을 갱신한다
// 6. 이렇게 슬라이딩 윈도우로 같은 길이의 모든 구간 합을 구한다
// 7. Set의 크기가 서로 다른 합의 개수이므로 set.size return

function solution(elements) {
  const n = elements.length;
  const arr = elements.concat(elements);
  const set = new Set();

  for (let len = 1; len <= n; len++) {
    let sum = 0;

    for (let i = 0; i < len; i++) {
      sum += arr[i];
    }

    set.add(sum);

    for (let start = 1; start < n; start++) {
      sum = sum - arr[start - 1] + arr[start + len - 1];
      set.add(sum);
    }
  }

  return set.size;
}
