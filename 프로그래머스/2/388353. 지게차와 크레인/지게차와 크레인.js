function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;
  const grid = storage.map((row) => row.split(''));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 바깥(패딩)에서 빈 칸만 지나며, 컨테이너에 "닿는지" 표시
  const accessible = () => {
    const pn = n + 2;
    const pm = m + 2;
    const seen = Array.from({ length: pn }, () => Array(pm).fill(false));
    const acc = Array.from({ length: n }, () => Array(m).fill(false));
    const q = [[0, 0]];
    seen[0][0] = true;
    let head = 0;

    while (head < q.length) {
      const [r, c] = q[head++];
      for (let d = 0; d < 4; d++) {
        const nr = r + dx[d];
        const nc = c + dy[d];
        if (nr < 0 || nr >= pn || nc < 0 || nc >= pm || seen[nr][nc]) continue;

        if (nr >= 1 && nr <= n && nc >= 1 && nc <= m) {
          const cell = grid[nr - 1][nc - 1];
          if (cell === 0) {
            seen[nr][nc] = true;
            q.push([nr, nc]); // 이미 빠진 칸은 통과
          } else {
            acc[nr - 1][nc - 1] = true; // 바깥에서 닿는 컨테이너
            seen[nr][nc] = true;        // 컨테이너 안으로는 진입하지 않음
          }
        } else {
          seen[nr][nc] = true;
          q.push([nr, nc]);
        }
      }
    }
    return acc;
  };

  for (const req of requests) {
    if (req.length === 1) {
      const acc = accessible();
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (grid[i][j] === req && acc[i][j]) grid[i][j] = 0;
        }
      }
    } else {
      const ch = req[0]; // 크레인: 해당 종류 전부 제거
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (grid[i][j] === ch) grid[i][j] = 0;
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] !== 0) count++;
    }
  }
  return count;
}
// 1. 요청 1글자(지게차) = 바깥과 연결된 컨테이너만 제거, 2글자(크레인) = 그 종류 전부 제거
// 2. 접근 가능 여부는 창고를 빈 테두리로 감싼 뒤 BFS (빈 칸만 통과)
// 3. 모든 요청 후 남은 컨테이너 수 반환
