function solution(n, k) {
    // 1. n을 k진수로 변환하고, '0'을 기준으로 쪼개기 (Lv.0 ~ 1 핵심 스킬)
    // 예: 437674.toString(3) -> "211020101011"
    // .split('0') -> ["211", "2", "1", "", "1", "11"]
    const candidates = n.toString(k).split('0');
    
    let count = 0;

    // 2. 쪼개진 조각들을 하나씩 꺼내서 소수인지 확인
    for (let str of candidates) {
        // "00"처럼 0이 연속으로 있으면 빈 문자열("")이 생김. 빈 문자열이거나 "1"이면 패스
        if (!str || str === "1") continue;
        
        // 3. 소수라면 카운트 증가
        if (isPrime(Number(str))) {
            count++;
        }
    }
    
    return count;
}

// 🛑 [중요] 시간 초과를 막아주는 효율적인 소수 판별 헬퍼 함수
function isPrime(num) {
    if (num <= 1) return false;
    
    // 핵심: 제곱근(Math.sqrt)까지만 나누어 봐도 소수인지 알 수 있습니다!
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    
    return true; // 끝까지 안 나누어 떨어지면 소수!
}