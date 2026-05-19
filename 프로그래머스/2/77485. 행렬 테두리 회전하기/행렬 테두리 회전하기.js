function solution(rows, columns, queries) {
    // 1. 1부터 rows * columns까지 숫자가 채워진 2차원 배열 만들기
    const grid = Array.from({ length: rows }, (_, i) => 
        Array.from({ length: columns }, (_, j) => i * columns + j + 1)
    );
    
    const answer = [];

    // 2. 주어진 회전 명령(queries)을 하나씩 실행
    for (const [x1, y1, x2, y2] of queries) {
        // 문제의 인덱스는 1부터 시작하므로, 배열에 맞게 0부터 시작하도록 1씩 빼줍니다.
        const r1 = x1 - 1, c1 = y1 - 1, r2 = x2 - 1, c2 = y2 - 1;
        
        // 왼쪽 위 모서리 값을 주머니에 대피시킵니다.
        const temp = grid[r1][c1]; 
        let minVal = temp; // 회전하는 숫자 중 최솟값 찾기용

        // 3. 반시계 방향으로 값들을 덮어씌웁니다. (시계 방향 회전 효과)
        
        // ① 왼쪽 줄: 위로 당기기
        for (let i = r1; i < r2; i++) {
            grid[i][c1] = grid[i + 1][c1];
            minVal = Math.min(minVal, grid[i][c1]);
        }
        // ② 아래쪽 줄: 왼쪽으로 당기기
        for (let i = c1; i < c2; i++) {
            grid[r2][i] = grid[r2][i + 1];
            minVal = Math.min(minVal, grid[r2][i]);
        }
        // ③ 오른쪽 줄: 아래로 당기기
        for (let i = r2; i > r1; i--) {
            grid[i][c2] = grid[i - 1][c2];
            minVal = Math.min(minVal, grid[i][c2]);
        }
        // ④ 위쪽 줄: 오른쪽으로 당기기
        for (let i = c2; i > c1 + 1; i--) {
            grid[r1][i] = grid[r1][i - 1];
            minVal = Math.min(minVal, grid[r1][i]);
        }

        // 4. 대피시켜 둔 값을 마지막 빈자리(위쪽 줄의 두 번째 칸)에 넣기
        grid[r1][c1 + 1] = temp;
        
        // 최솟값 저장
        answer.push(minVal);
    }

    return answer;
}