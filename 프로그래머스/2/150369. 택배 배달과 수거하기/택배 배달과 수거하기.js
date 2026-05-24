function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    
    // 현재까지 누적된 배달/수거 '빚(업무량)'
    let deliverNeed = 0; 
    let pickupNeed = 0;  

    // 가장 먼 집(배열의 끝)부터 거꾸로 방문합니다.
    for (let i = n - 1; i >= 0; i--) {
        // 이번 집에서 해야 할 업무량을 누적합니다.
        deliverNeed += deliveries[i];
        pickupNeed += pickups[i];

        // 배달이나 수거 중 하나라도 해야 할 일(빚)이 1 이상 남아있다면? 트럭 출발!
        while (deliverNeed > 0 || pickupNeed > 0) {
            // 이번 집까지 트럭이 1번 왕복합니다.
            answer += (i + 1) * 2; // 왕복 거리 더하기

            // 트럭 용량만큼 배달 빚과 수거 빚을 갚습니다.
            deliverNeed -= cap;
            pickupNeed -= cap;
            
            // 만약 빚이 음수가 된다면, 남은 용량을 다음(왼쪽) 집에서 쓸 수 있다는 의미입니다.
            // while문이 돌기 때문에, 한 집에 업무량이 엄청 많으면 트럭이 여러 번 왔다 갔다 합니다.
        }
    }
    return answer;
}