function solution(str1, str2) {
  // 문자열 → 연속 2글자 조합(영문자만) 다중집합 생성
  const toPairs = (str) => {
    const s = str.toLowerCase();
    const pairs = [];
    for (let i = 0; i < s.length - 1; i++) {
      const pair = s.slice(i, i + 2);
      if (/^[a-z]{2}$/.test(pair)) pairs.push(pair); // 알파벳 2글자만 유효
    }
    return pairs;
  };

  const a = toPairs(str1);
  const b = toPairs(str2);

  // 다중집합 교집합/합집합 (원소별 개수 고려)
  const countMap = (arr) => {
    const m = new Map();
    for (const x of arr) m.set(x, (m.get(x) || 0) + 1);
    return m;
  };
  const ma = countMap(a);
  const mb = countMap(b);

  const keys = new Set([...ma.keys(), ...mb.keys()]);
  let inter = 0;
  let union = 0;
  for (const k of keys) {
    const ca = ma.get(k) || 0;
    const cb = mb.get(k) || 0;
    inter += Math.min(ca, cb); // 교집합: 더 적은 개수
    union += Math.max(ca, cb); // 합집합: 더 많은 개수
  }

  // 두 집합 모두 공집합이면 자카드 유사도 = 1
  if (union === 0) return 65536;
  return Math.floor((inter / union) * 65536);
}
// 1. 각 문자열을 소문자화 후 인접 2글자 조합으로 분해 (영문자 쌍만 유효)
// 2. 다중집합 자카드 유사도 = |교집합| / |합집합|
//    → 교집합은 원소별 min, 합집합은 원소별 max 누적
// 3. 둘 다 공집합이면 1(=65536), 아니면 유사도 * 65536 후 내림
