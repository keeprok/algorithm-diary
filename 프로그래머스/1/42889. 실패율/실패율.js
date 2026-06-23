// 1. count 배열에 각 스테이지에 멈춰 있는 사람 수를 센다
// 2. reach = 현재 스테이지에 도달한 사람 수 (처음엔 전체 유저 수)
// 3. 실패율 = 현재 스테이지에 멈춘 사람 수 / 현재 스테이지에 도달한 사람 수
// 4. 다음 스테이지로 넘어갈 때 reach에서 현재 스테이지 실패 인원을 뺀다
// 5. [스테이지 번호, 실패율] 형태로 저장한다
// 6. 실패율 내림차순으로 정렬하고, 실패율이 같으면 스테이지 번호 오름차순으로 정렬한다
// 7. 정렬된 배열에서 스테이지 번호만 뽑아 return

function solution(N, stages) {
  const count = Array(N + 2).fill(0);

  for (const stage of stages) {
    count[stage]++;
  }

  let reach = stages.length;
  const result = [];

  for (let stage = 1; stage <= N; stage++) {
    const fail = count[stage];
    const rate = reach === 0 ? 0 : fail / reach;

    result.push([stage, rate]);
    reach -= fail;
  }

  result.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0] - b[0];
  });

  return result.map(([stage]) => stage);
}
