function solution(queries) {
  const child = ['RR', 'Rr', 'Rr', 'rr'];

  function gene(n, p) {
    if (n === 1) return 'Rr';
    const parent = gene(n - 1, Math.floor((p - 1) / 4) + 1);
    if (parent !== 'Rr') return parent; // RR/rr 자식은 전부 부모와 같음
    return child[(p - 1) % 4];
  }

  return queries.map(([n, p]) => gene(n, p));
}
// 1. n≤16이면 4^(n-1)마리를 배열로 못 만듦 → 부모만 O(n) 재귀
// 2. 부모 번호 = floor((p-1)/4)+1, 형제 중 몇 번째 = (p-1)%4
// 3. 조상이 RR/rr이면 그 아래는 전부 고정, Rr만 4칸 규칙 적용
