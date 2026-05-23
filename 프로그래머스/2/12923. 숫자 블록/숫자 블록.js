function solution(begin, end) {
    const answer = [];

    // begin부터 end까지 각 위치(i)에 들어갈 블록 찾기
    for (let i = begin; i <= end; i++) {
        // 예외 처리: 1번 위치의 블록은 항상 0
        if (i === 1) {
            answer.push(0);
            continue;
        }

        let maxDivisor = 1; // 블록을 못 찾으면 기본값은 1 (소수인 경우)

        // 시간 초과 방지: 제곱근까지만 약수 검사
        for (let j = 2; j <= Math.sqrt(i); j++) {
            
            // 나누어 떨어진다면 j는 약수!
            if (i % j === 0) {
                const pair = i / j; // 짝꿍 약수 (항상 j보다 큼)

                // 1. 큰 짝꿍 약수가 10,000,000 이하인지 확인
                if (pair <= 10000000) {
                    maxDivisor = pair; 
                    break; // 작은 수(j)부터 찾았으므로, 이때 만난 pair가 조건에 맞는 가장 큰 약수! 바로 탈출.
                } 
                // 2. 만약 큰 짝꿍이 천만을 넘어서 못 쓴다면?
                else {
                    // 작은 약수(j)라도 백업해 둠. (이후 더 큰 j를 만나면 갱신됨)
                    maxDivisor = j;
                }
            }
        }
        
        answer.push(maxDivisor);
    }

    return answer;
}