function solution(targets) {
  // 끝점(e) 기준 오름차순 정렬 → 가장 빨리 끝나는 구간부터 처리
  targets.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let shot = -1; // 마지막으로 요격한 x좌표 (열린구간이라 -1로 초기화)

  for (const [s, e] of targets) {
    // 현재 미사일 구간이 직전 요격 위치로 커버 안 되면 새 요격 필요
    if (s >= shot) {
      count++;
      shot = e - 0.5; // 끝점 바로 앞(열린구간 e 미포함)에 요격 배치
    }
  }

  return count;
}
// 1. 끝점 기준 정렬 후, 가장 빨리 끝나는 구간의 끝에 요격 좌표를 둔다 (greedy)
// 2. 다음 구간 시작 s가 직전 요격 위치보다 크면(겹치지 않으면) 새 요격 추가
// 3. 열린구간 (s, e)이므로 e 지점은 포함 안 됨 → shot = e - 0.5로 안전하게 배치
