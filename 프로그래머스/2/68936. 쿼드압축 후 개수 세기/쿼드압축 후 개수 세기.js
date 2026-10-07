function solution(arr) {
  const answer = [0, 0]; // [0의 개수, 1의 개수]

  // (r, c)에서 시작하는 size x size 영역을 압축 시도
  function compress(r, c, size) {
    const first = arr[r][c];
    let same = true;

    // 영역 전체가 같은 값인지 확인
    for (let i = r; i < r + size; i++) {
      for (let j = c; j < c + size; j++) {
        if (arr[i][j] !== first) { same = false; break; }
      }
      if (!same) break;
    }

    if (same) {
      answer[first]++; // 전부 같으면 하나로 압축
      return;
    }

    // 다르면 4등분해서 각각 재귀 (분할정복)
    const half = size / 2;
    compress(r, c, half);
    compress(r, c + half, half);
    compress(r + half, c, half);
    compress(r + half, c + half, half);
  }

  compress(0, 0, arr.length);
  return answer;
}
// 1. 영역이 전부 같은 값이면 하나로 압축 → 해당 값 카운트 증가
// 2. 섞여 있으면 4등분해서 각 사분면을 재귀 압축 (분할정복/DFS)
// 3. 최종 [0의 개수, 1의 개수] 반환
