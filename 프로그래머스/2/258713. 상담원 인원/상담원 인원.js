function solution(k, n, reqs) {
  // 각 유형별 상담원 수 배열 초기화 (최소 1명씩)
  const counselors = Array(k + 1).fill(1);
  let minWait = Infinity;
  let answer = Array(k + 1).fill(1);

  // 각 유형에 추가 인원을 배분하는 완전탐색 (재귀)
  function simulate(type, remaining) {
    if (type > k) {
      // 현재 배분으로 총 대기시간 계산
      const totalWait = calcWait();
      if (totalWait < minWait) {
        minWait = totalWait;
        answer = [...counselors];
      }
      return;
    }
    for (let add = 0; add <= remaining; add++) {
      counselors[type] = 1 + add;
      simulate(type + 1, remaining - add);
    }
  }

  function calcWait() {
    let total = 0;
    // 유형별 상담원 종료 시각 큐 (최소 힙 대신 배열로 관리)
    const endTimes = {};
    for (let t = 1; t <= k; t++) {
      endTimes[t] = Array(counselors[t]).fill(0);
    }

    for (const [start, dur, type] of reqs) {
      // 가장 빨리 끝나는 상담원 찾기
      endTimes[type].sort((a, b) => a - b);
      const earliest = endTimes[type][0];
      if (earliest <= start) {
        // 대기 없음
        endTimes[type][0] = start + dur;
      } else {
        // 대기 발생
        total += earliest - start;
        endTimes[type][0] = earliest + dur;
      }
    }
    return total;
  }

  simulate(1, n - k); // 최소 1명씩 배정 후 남은 n-k명 배분
  return answer.slice(1);
}
// 1. 각 유형에 최소 1명 배정 후 남은 인원을 완전탐색으로 배분
// 2. 각 배분 조건에서 대기시간 시뮬레이션 → 최솟값 배분 선택
