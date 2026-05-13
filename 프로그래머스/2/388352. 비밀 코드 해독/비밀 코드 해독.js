function solution(n, q, ans) {
    let answer = 0;
    const currentCode = []; // 현재 뽑은 5개의 숫자를 담을 배열
    
    // 5개의 숫자를 뽑는 재귀 함수
    const getCombinations = (start) => {
        // 1. 숫자를 5개 다 뽑았다면 조건 확인
        if (currentCode.length === 5) {
            let isValid = true;
            
            // 모든 시도(q)에 대해 조건(ans)이 맞는지 검사
            for (let i = 0; i < q.length; i++) {
                let matchCount = 0;
                for (let num of currentCode) {
                    if (q[i].includes(num)) matchCount++;
                }
                // 하나라도 조건과 다르면 실패
                if (matchCount !== ans[i]) {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) answer++;
            return;
        }
        
        // 2. 아직 5개를 다 못 뽑았다면 다음 숫자 뽑기
        for (let i = start; i <= n; i++) {
            currentCode.push(i);
            getCombinations(i + 1); // 다음 숫자를 뽑기 위해 자기 자신을 호출 (재귀)
            currentCode.pop(); // 방금 뽑은 숫자를 빼고 다른 숫자 시도
        }
    };
    
    getCombinations(1); // 1부터 뽑기 시작
    return answer;
}