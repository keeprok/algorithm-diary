function solution(cards) {
    const visited = Array(cards.length).fill(false); // 상자 오픈 여부 기록장
    const groupCounts = []; // 각 그룹별 상자 개수를 담을 배열

    // 1. 모든 상자를 한 번씩 확인해 봅니다.
    for (let i = 0; i < cards.length; i++) {
        // 아직 안 열어본 상자라면 새로운 그룹 탐색 시작!
        if (!visited[i]) {
            let count = 0; // 이번 그룹의 상자 개수
            let current = i; // 현재 탐색 중인 상자 위치

            // 2. 이미 열린 상자를 만날 때까지 꼬리물기 시작
            while (!visited[current]) {
                visited[current] = true; // 현재 상자 오픈(방문 처리)
                count++; // 상자 개수 1 증가
                
                // 다음 열어야 할 상자 인덱스로 이동 (카드의 숫자는 1부터 시작하므로 -1 해줌)
                current = cards[current] - 1; 
            }
            
            // 꼬리물기가 끝났으면 이번 그룹의 총 상자 개수를 저장
            groupCounts.push(count); 
        }
    }

    // 3. 내림차순 정렬 (어제 다루었던 가장 중요한 배열 메서드 중 하나죠!)
    groupCounts.sort((a, b) => b - a);

    // 4. 그룹이 1개뿐이면 게임 규칙상 0점
    if (groupCounts.length === 1) return 0;

    // 가장 큰 두 그룹의 상자 개수를 곱함
    return groupCounts[0] * groupCounts[1];
}