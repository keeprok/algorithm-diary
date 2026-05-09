function solution(name) {
    let answer = 0;
    // 커서를 오른쪽으로만 쭉 이동했을 때의 횟수 (최대치로 초기화)
    let minMove = name.length - 1; 

    for (let i = 0; i < name.length; i++) {
        // 1. 상/하 알파벳 맞추기
        const charCode = name.charCodeAt(i);
        // 'A'에서 올라가는 것과 'Z'에서 내려오는 것 중 최솟값 더하기
        answer += Math.min(charCode - 65, 91 - charCode);

        // 2. 좌/우 커서 이동 최솟값 찾기
        let nextIndex = i + 1;
        // 다음 문자가 'A'라면 굳이 갈 필요 없으므로 'A'가 끝나는 지점 찾기
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        
        // (현재까지 온 거리 * 2) + 뒤에서부터 남은 거리 (왔다가 다시 돌아가서 끝으로 가는 경우)
        // (뒤에서부터 온 거리 * 2) + 현재까지 온 거리 (처음부터 뒤로 갔다가 다시 앞으로 오는 경우)
        minMove = Math.min(
            minMove, 
            (i * 2) + name.length - nextIndex, 
            i + 2 * (name.length - nextIndex)
        );
    }

    return answer + minMove;
}