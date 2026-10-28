function solution(user_id, banned_id) {
  const m = banned_id.length;

  // 각 banned 패턴에 매칭되는 user 인덱스 목록
  const candidates = banned_id.map((ban) =>
    user_id
      .map((user, i) => {
        if (user.length !== ban.length) return -1;
        const ok = [...ban].every((ch, j) => ch === '*' || ch === user[j]);
        return ok ? i : -1;
      })
      .filter((i) => i !== -1)
  );

  const used = Array(user_id.length).fill(false);
  const combos = new Set();

  function dfs(idx, picked) {
    if (idx === m) {
      combos.add([...picked].sort((a, b) => a - b).join(',')); // 순서 다른 같은 조합 제거
      return;
    }
    for (const i of candidates[idx]) {
      if (used[i]) continue;
      used[i] = true;
      picked.push(i);
      dfs(idx + 1, picked);
      picked.pop();
      used[i] = false;
    }
  }

  dfs(0, []);
  return combos.size;
}
// 1. 제재 아이디(*)와 길이가 같고, * 아닌 자리가 일치하면 후보
// 2. 후보를 중복 없이 매칭하는 모든 경우 DFS (백트래킹)
// 3. 매칭 순서만 다른 같은 집합은 Set(정렬 후 join)으로 한 번만 카운트
