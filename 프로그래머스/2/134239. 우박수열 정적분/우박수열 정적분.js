function solution(k, ranges) {
  // 콜라츠(우박) 수열 생성
  const seq = [k];
  while (k !== 1) {
    k = k % 2 === 0 ? k / 2 : k * 3 + 1;
    seq.push(k);
  }

  const n = seq.length;

  // 인접 점 사이 사다리꼴 넓이의 누적합 (prefix[j] = 0~j 구간 넓이)
  const prefix = [0];
  for (let i = 0; i < n - 1; i++) {
    const trapezoid = (seq[i] + seq[i + 1]) / 2;
    prefix.push(prefix[i] + trapezoid);
  }

  return ranges.map(([a, b]) => {
    const start = a;          // 시작점(앞에서 +a)
    const end = (n - 1) + b;  // 끝점(뒤에서 b만큼, b는 0 이하)
    if (start > end) return -1; // 구간이 유효하지 않으면 -1
    return prefix[end] - prefix[start];
  });
}
// 1. 우박수열을 만들고 점 (i, seq[i])들을 직선으로 이은 그래프로 봄
// 2. 인접 두 점 사이는 사다리꼴 → 넓이 누적합(prefix)으로 구간합 O(1) 계산
// 3. 각 range의 실제 끝 인덱스 = (n-1)+b, start>end면 -1
