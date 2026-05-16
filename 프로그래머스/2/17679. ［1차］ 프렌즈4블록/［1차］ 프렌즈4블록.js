function solution(m, n, board) {
    // 1. 문자열 보드를 다루기 쉬운 2차원 배열로 변환
    let grid = board.map(row => row.split(''));
    let totalRemoved = 0;

    // 더 이상 지워질 블록이 없을 때까지 무한 반복
    while (true) {
        // 이번 턴에 지워질 블록들의 좌표를 담을 Set (중복 제거용)
        const removeSet = new Set();

        // 2. 2x2 블록 찾기
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const current = grid[i][j];
                // 빈 칸(0)이 아니고, 오른쪽, 아래, 대각선 아래가 모두 자신과 같다면?
                if (current && 
                    current === grid[i][j+1] && 
                    current === grid[i+1][j] && 
                    current === grid[i+1][j+1]) {
                    
                    // 지워야 할 4칸의 좌표를 문자열 형태로 수첩(Set)에 기록
                    removeSet.add(`${i},${j}`);
                    removeSet.add(`${i},${j+1}`);
                    removeSet.add(`${i+1},${j}`);
                    removeSet.add(`${i+1},${j+1}`);
                }
            }
        }

        // 3. 수첩이 비어있다? -> 더 이상 지울 블록이 없다는 뜻이므로 게임 끝!
        if (removeSet.size === 0) break;

        // 이번 턴에 지워진 블록 개수 정산
        totalRemoved += removeSet.size;

        // 4. 수첩에 적힌 좌표들을 찾아가서 빈 칸(0)으로 펑 터뜨림
        removeSet.forEach(pos => {
            const [r, c] = pos.split(',').map(Number);
            grid[r][c] = 0; 
        });

        // 5. 중력 적용 (블록들 아래로 떨어뜨리기)
        // 세로줄(열)을 기준으로 밑에서부터 위로 탐색하며 빈칸을 채웁니다.
        for (let j = 0; j < n; j++) {
            for (let i = m - 1; i >= 0; i--) {
                if (grid[i][j] === 0) { // 빈 칸을 발견하면
                    // 그 위쪽을 뒤져서 떨어질 블록이 있는지 찾기
                    for (let k = i - 1; k >= 0; k--) {
                        if (grid[k][j] !== 0) {
                            grid[i][j] = grid[k][j]; // 위쪽 블록을 아래 빈칸으로 끌어내림
                            grid[k][j] = 0; // 끌어내린 원래 자리는 다시 빈 칸으로
                            break; // 하나 내렸으면 다음 빈 칸을 향해 넘어감
                        }
                    }
                }
            }
        }
    }

    return totalRemoved; // 최종 점수(지워진 블록 수) 반환
}