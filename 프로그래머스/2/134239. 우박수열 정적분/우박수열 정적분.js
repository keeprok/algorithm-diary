function solution(k, ranges) {
    // 1. 우박수열 만들기 (y좌표들을 배열에 담기)
    const yValues = [k];
    while (k > 1) {
        if (k % 2 === 0) k = k / 2;
        else k = k * 3 + 1;
        yValues.push(k);
    }

    // 2. 구간별 넓이 구하기 (사다리꼴 넓이 = (왼쪽변 + 오른쪽변) / 2)
    // dx(가로 길이)는 항상 1이므로 곱할 필요가 없습니다.
    const areas = [];
    for (let i = 0; i < yValues.length - 1; i++) {
        areas.push((yValues[i] + yValues[i+1]) / 2);
    }

    // 3. 주어진 구간(ranges)의 넓이 합 구하기
    const n = yValues.length - 1; // 전체 구간의 길이
    const answer = [];

    for (const [a, b] of ranges) { // 배열 구조 분해 할당
        const start = a;
        const end = n + b; // b는 0 이하의 음수이므로 더해주면 뒤에서부터 뺀 인덱스가 됩니다.

        if (start > end) {
            answer.push(-1.0); // 시작점이 끝점보다 뒤에 있으면 -1
        } else {
            // start부터 end 전까지의 넓이를 싹 다 더합니다.
            let sum = 0;
            for (let i = start; i < end; i++) {
                sum += areas[i];
            }
            answer.push(sum);
        }
    }

    return answer;
}