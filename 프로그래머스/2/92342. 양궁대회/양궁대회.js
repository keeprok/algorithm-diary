function solution(n, info) {
  let best = -1;        // 최대 점수 차 (라이언 - 어피치)
  let bestComb = null;  // 그때의 화살 분포
  const comb = Array(11).fill(0);

  // 현재 분포(lionArr)로 두 선수 점수 계산
  function getScore(lionArr) {
    let lion = 0, apeach = 0;
    for (let i = 0; i < 11; i++) {
      if (info[i] === 0 && lionArr[i] === 0) continue; // 아무도 안 쏨
      if (lionArr[i] > info[i]) lion += 10 - i;        // 더 많이 쏜 쪽이 점수
      else apeach += 10 - i;
    }
    return [lion, apeach];
  }

  // 10~0점 칸에 화살을 분배하는 완전탐색
  function dfs(idx, remain) {
    if (idx === 10) {
      comb[10] = remain; // 마지막 칸(0점)에 남은 화살 전부
      const [lion, apeach] = getScore(comb);
      const diff = lion - apeach;

      if (diff > 0) {
        if (diff > best) {
          best = diff;
          bestComb = [...comb];
        } else if (diff === best) {
          // 동점 차 → 더 낮은 점수에 많이 쏜 분포 선호 (뒤에서부터 비교)
          for (let i = 10; i >= 0; i--) {
            if (comb[i] !== bestComb[i]) {
              if (comb[i] > bestComb[i]) bestComb = [...comb];
              break;
            }
          }
        }
      }
      comb[10] = 0;
      return;
    }

    for (let k = 0; k <= remain; k++) {
      comb[idx] = k;
      dfs(idx + 1, remain - k);
      comb[idx] = 0;
    }
  }

  dfs(0, n);
  return bestComb || [-1]; // 이길 방법 없으면 [-1]
}
// 1. 10점~0점 11개 칸에 화살 n개를 분배하는 모든 경우를 완전탐색
// 2. 각 칸에서 더 많이 쏜 선수가 점수 획득 → 점수 차(라이언-어피치) 계산
// 3. 양수 차가 최대인 분포 선택, 동점이면 낮은 점수를 더 많이 맞힌 쪽 우선
