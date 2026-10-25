function solution(info, query) {
  // 각 지원자의 4개 조건 조합을 모든 부분집합(언어/직군/경력/소울푸드 + '-')으로 저장
  const map = new Map(); // key: "조건조합" → value: 점수 배열(정렬됨)

  for (const line of info) {
    const parts = line.split(' ');
    const score = Number(parts[4]);
    const attrs = parts.slice(0, 4);

    // 각 항목을 실제값 또는 '-'로 치환하는 2^4 = 16가지 키 생성
    for (let mask = 0; mask < 16; mask++) {
      let key = '';
      for (let i = 0; i < 4; i++) {
        key += (mask & (1 << i)) ? attrs[i] : '-';
      }
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(score);
    }
  }

  // 각 키의 점수 배열을 정렬 → 이분탐색 준비
  for (const arr of map.values()) arr.sort((a, b) => a - b);

  // 이분탐색: target 이상인 점수의 개수
  const countGte = (arr, target) => {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    return arr.length - lo;
  };

  return query.map((q) => {
    // "자바 and 백엔드 and junior and pizza 100" → and 제거, 공백 정리
    const tokens = q.replace(/ and /g, ' ').split(' ');
    const key = tokens.slice(0, 4).join('');
    const target = Number(tokens[4]);

    const arr = map.get(key);
    return arr ? countGte(arr, target) : 0;
  });
}
// 1. 지원자마다 4개 조건의 '-' 포함 모든 조합(16가지)을 key로 미리 저장
// 2. 각 key의 점수 배열을 정렬 → 쿼리의 점수 이상 개수를 이분탐색으로 빠르게
// 3. 쿼리를 key로 변환해 조회 → O(조건) 전처리 + O(log N) 조회
