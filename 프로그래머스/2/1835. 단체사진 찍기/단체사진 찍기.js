function solution(n, data) {
  const friends = ['A', 'C', 'F', 'J', 'M', 'N', 'R', 'T'];
  let count = 0;

  const valid = (arr) => {
    const idx = {};
    arr.forEach((f, i) => { idx[f] = i; });

    return data.every((cond) => {
      const a = cond[0];
      const b = cond[2];
      const op = cond[3];
      const gap = Number(cond[4]);
      const dist = Math.abs(idx[a] - idx[b]) - 1; // 사이에 선 사람 수

      if (op === '=') return dist === gap;
      if (op === '>') return dist > gap;
      return dist < gap;
    });
  };

  const dfs = (cur) => {
    if (cur.length === 8) {
      if (valid(cur)) count++;
      return;
    }
    for (const f of friends) {
      if (cur.includes(f)) continue;
      cur.push(f);
      dfs(cur);
      cur.pop();
    }
  };

  dfs([]);
  return count;
}
// 1. 8명(A C F J M N R T)의 모든 줄 서기 순열을 DFS로 생성 (8! = 40320)
// 2. 조건 "A~B=2" → 두 사람 사이 거리(사이 인원)가 연산자/숫자와 일치해야 함
// 3. 모든 조건을 통과한 순열 개수가 정답
