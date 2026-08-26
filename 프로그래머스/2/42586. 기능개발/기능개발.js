function solution(progresses, speeds) {
  const answer = [];

  // 각 기능이 완성되는 데 걸리는 날수
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

  let i = 0;
  while (i < days.length) {
    let count = 1;
    // 뒤 기능의 완성일이 현재 기능 완성일보다 같거나 빠르면 함께 배포
    while (i + count < days.length && days[i + count] <= days[i]) {
      count++;
    }
    answer.push(count);
    i += count; // 다음 묶음의 시작으로 점프
  }

  return answer;
}
// 1. 완성 날수 = Math.ceil((100 - 진도) / 속도) → 각 기능이 며칠 걸리는지 미리 계산
// 2. 첫 기능이 배포될 때 그 이후 기능들이 이미 완성됐으면 함께 묶어 배포
// 3. 다음 묶음 첫 기능이 더 오래 걸리면 새 배포 시작
