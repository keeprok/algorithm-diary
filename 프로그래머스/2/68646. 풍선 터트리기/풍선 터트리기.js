function solution(a) {
  const n = a.length;
  const leftMin = Array(n);  // i 포함 왼쪽 최솟값
  const rightMin = Array(n); // i 포함 오른쪽 최솟값

  leftMin[0] = a[0];
  for (let i = 1; i < n; i++) leftMin[i] = Math.min(leftMin[i - 1], a[i]);

  rightMin[n - 1] = a[n - 1];
  for (let i = n - 2; i >= 0; i--) rightMin[i] = Math.min(rightMin[i + 1], a[i]);

  let count = 0;
  for (let i = 0; i < n; i++) {
    // 왼쪽·오른쪽에 나보다 작은 값이 "둘 다" 있으면 최후까지 못 남김
    const smallerLeft = i > 0 && leftMin[i - 1] < a[i];
    const smallerRight = i < n - 1 && rightMin[i + 1] < a[i];
    if (!(smallerLeft && smallerRight)) count++;
  }

  return count;
}
// 1. 더 큰 풍선은 언제든 터뜨릴 수 있고, "양쪽보다 작은 풍선"은 단 1번만 터뜨릴 수 있음
// 2. 어떤 풍선이 끝까지 남으려면 왼쪽 또는 오른쪽 중 한쪽은 전부 나보다 커야 함
// 3. 좌/우 prefix min으로 O(N)에 판별
