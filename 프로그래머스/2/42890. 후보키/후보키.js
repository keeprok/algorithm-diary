function solution(relation) {
  const rowCount = relation.length;
  const colCount = relation[0].length;

  // 컬럼 조합을 비트마스크로 전체 탐색 (1 ~ 2^colCount - 1)
  const candidates = [];

  for (let mask = 1; mask < (1 << colCount); mask++) {
    // 이 조합이 유일성을 만족하는지 검사
    const keys = new Set();
    for (const row of relation) {
      let key = '';
      for (let c = 0; c < colCount; c++) {
        if (mask & (1 << c)) key += row[c] + ','; // 선택된 컬럼만 조합
      }
      keys.add(key);
    }

    // 모든 행이 서로 다르면 유일성 만족
    if (keys.size === rowCount) {
      // 최소성 검사: 이미 후보키인 조합을 부분집합으로 포함하면 제외
      const isMinimal = candidates.every(cand => (cand & mask) !== cand);
      if (isMinimal) candidates.push(mask);
    }
  }

  return candidates.length;
}
// 1. 컬럼 조합을 비트마스크로 완전탐색 (각 비트 = 컬럼 선택 여부)
// 2. 유일성: 선택 컬럼으로 만든 행 키들이 모두 달라야 함 (Set 크기 = 행 수)
// 3. 최소성: 기존 후보키를 부분집합으로 포함하면 제외 → (cand & mask) === cand 면 포함
