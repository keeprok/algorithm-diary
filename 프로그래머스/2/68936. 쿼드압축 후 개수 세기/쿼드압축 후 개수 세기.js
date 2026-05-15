function solution(arr) {
    let count = [0, 0]; // [0이 압축된 개수, 1이 압축된 개수]

    // x, y: 현재 검사할 구역의 맨 왼쪽 위 좌표
    // length: 현재 구역의 가로/세로 길이
    const compress = (x, y, length) => {
        const firstValue = arr[x][y]; // 현재 구역의 첫 번째 칸의 값 (기준점)
        let isAllSame = true;

        // 1. 현재 구역이 모두 같은 숫자인지 검사
        for (let i = x; i < x + length; i++) {
            for (let j = y; j < y + length; j++) {
                if (arr[i][j] !== firstValue) {
                    isAllSame = false; // 하나라도 다르면 섞여 있는 것!
                    break;
                }
            }
            if (!isAllSame) break;
        }

        // 2. 모두 같은 숫자라면? -> 압축 성공! 해당 숫자의 개수 증가
        if (isAllSame) {
            count[firstValue]++;
            return; // 압축했으니 여기서 이 구역은 끝 (재귀 탈출)
        }

        // 3. 섞여 있다면? -> 4등분해서 각각 다시 압축 시도 (재귀 호출)
        const half = length / 2;
        compress(x, y, half);                 // 1. 왼쪽 위 구역
        compress(x, y + half, half);          // 2. 오른쪽 위 구역
        compress(x + half, y, half);          // 3. 왼쪽 아래 구역
        compress(x + half, y + half, half);   // 4. 오른쪽 아래 구역
    };

    // 처음에는 (0,0) 좌표부터 전체 배열 길이만큼 잘라보라고 명령 시작
    compress(0, 0, arr.length);

    return count;
}