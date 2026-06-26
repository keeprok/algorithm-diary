// 1. 각 기능이 100%가 되기까지 걸리는 날짜를 계산한다
// 2. 앞 기능이 배포될 때 뒤 기능도 이미 끝났다면 같은 배포 묶음에 포함된다
// 3. current = 현재 배포 묶음의 기준 날짜
// 4. days[i] <= current 이면 같은 날 배포되므로 count++
// 5. days[i] > current 이면 이전 묶음을 result에 넣고 새 배포 묶음을 시작한다
// 6. 마지막 배포 묶음 count를 result에 넣고 return

function solution(progresses, speeds) {
  const days = progresses.map((progress, index) => {
    const remain = 100 - progress;
    return Math.ceil(remain / speeds[index]);
  });

  const result = [];
  let current = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= current) {
      count++;
    } else {
      result.push(count);
      current = days[i];
      count = 1;
    }
  }

  result.push(count);
  return result;
}
