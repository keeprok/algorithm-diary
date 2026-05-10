function solution(targets) {
    // 1. 끝나는 시간(x[1])을 기준으로 오름차순 정렬합니다.
    // "가장 먼저 끝나는 폭격기부터 순서대로 보겠다"는 뜻입니다.
    targets.sort((a, b) => a[1] - b[1]);

    let answer = 0; // 쏜 미사일 개수
    let lastMissile = -1; // 마지막으로 미사일을 쏜 위치 (처음엔 없으므로 -1)

    // 2. 정렬된 폭격기들을 하나씩 꺼내서 확인합니다. (for...of 문법)
    for (let target of targets) {
        const [start, end] = target; // 배열 구조 분해 할당 (Lv.0 필수 문법)
        
        // 현재 폭격기의 시작 지점이 마지막으로 쏜 미사일 위치보다 뒤에 있다면?
        // -> 이전 미사일로는 이 폭격기를 맞출 수 없으므로 새 미사일을 쏴야 함!
        if (lastMissile <= start) {
            lastMissile = end; // 새 미사일은 현재 폭격기가 끝나는 지점에 쏩니다.
            answer++; // 미사일 개수 1 증가
        }
    }
    
    return answer;
}