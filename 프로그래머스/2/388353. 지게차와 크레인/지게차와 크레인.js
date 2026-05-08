function solution(storage, requests) {
    const n = storage.length;
    const m = storage[0].length;
    
    // 다루기 쉽게 문자열 창고를 2차원 배열로 변환합니다. 빈 공간은 '.'으로 표시합니다.
    let grid = storage.map(row => row.split(''));
    
    // 상하좌우 탐색을 위한 방향 배열 (2차원 배열 문제의 필수품)
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    for (const req of requests) {
        const target = req[0]; 
        const isCrane = req.length === 2; // 길이가 2면 크레인
        
        if (isCrane) {
            // [크레인 처리]: 창고 전체를 훑으며 타겟을 무조건 지웁니다. (1레벨 수준)
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (grid[i][j] === target) grid[i][j] = '.'; 
                }
            }
        } else {
            // [지게차 처리]: 바깥 공기와 닿은 것만 찾습니다. (2레벨 수준 - BFS 적용)
            // 테크닉: 실제 창고보다 상하좌우 1칸씩 더 큰 (n+2)*(m+2) 가상 공간을 탐색합니다.
            const visited = Array.from({ length: n + 2 }, () => Array(m + 2).fill(false));
            const queue = [[0, 0]]; // 가상의 바깥 공간(0,0)부터 탐색 시작
            visited[0][0] = true;
            
            const toRemove = []; // 이번 턴에 치울 컨테이너 위치 모음
            
            while (queue.length > 0) {
                const [x, y] = queue.shift(); 
                
                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];
                    
                    // 가상 공간 범위 내에 있을 때
                    if (nx >= 0 && nx < n + 2 && ny >= 0 && ny < m + 2) {
                        if (!visited[nx][ny]) {
                            // 실제 grid 좌표로 변환 (패딩이 1칸씩 있으므로 1을 빼줌)
                            const r = nx - 1; 
                            const c = ny - 1;
                            
                            // 실제 창고 밖이거나, 이미 치워진 빈 공간('.')이면 공기가 계속 통과합니다.
                            if (r < 0 || r >= n || c < 0 || c >= m || grid[r][c] === '.') {
                                visited[nx][ny] = true;
                                queue.push([nx, ny]);
                            } 
                            // 탐색 중 외부 공기가 '타겟 컨테이너'에 닿았다면
                            else if (grid[r][c] === target) {
                                visited[nx][ny] = true; // 여긴 막혔으니 큐에 넣진 않고 방문 체크만
                                toRemove.push([r, c]);  // 치울 목록에 추가
                            }
                        }
                    }
                }
            }
            
            // 찾은 컨테이너들을 한 번에 비워줍니다.
            for (const [r, c] of toRemove) {
                grid[r][c] = '.';
            }
        }
    }
    
    // 모든 요청이 끝난 후, 남은 컨테이너 개수를 셉니다.
    let answer = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] !== '.') answer++;
        }
    }
    
    return answer;
}