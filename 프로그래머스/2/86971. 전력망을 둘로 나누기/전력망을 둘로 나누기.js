function solution(n, wires) {
    let minDiff = Number.MAX_SAFE_INTEGER; // 가장 작은 차이를 저장할 변수

    // 1. 모든 전선을 한 번씩 끊어보기 (완전 탐색)
    for (let i = 0; i < wires.length; i++) {
        // 이번 턴에 끊을 전선을 제외하고 나머지 전선들만 복사해옵니다.
        const currentWires = wires.filter((_, index) => index !== i);
        
        // 2. 남은 전선들로 연결망(그래프) 만들기
        const graph = Array.from({ length: n + 1 }, () => []);
        for (const [v1, v2] of currentWires) {
            graph[v1].push(v2); // 양방향으로 연결
            graph[v2].push(v1);
        }

        // 3. BFS로 한쪽 그룹의 송전탑 개수 세기
        const visited = Array(n + 1).fill(false);
        const queue = [1]; // 1번 송전탑부터 탐색 시작
        visited[1] = true;
        
        let count = 0; // 1번 송전탑과 연결된 타워 개수
        
        while (queue.length > 0) {
            const node = queue.shift();
            count++;
            
            for (const next of graph[node]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
        
        // 4. 두 그룹의 차이 계산하기
        // 한쪽이 count개면, 다른 쪽은 (n - count)개. 그 둘의 차이의 절댓값을 구합니다.
        const diff = Math.abs((n - count) - count);
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}