function solution(relation) {
    const rowCount = relation.length;     // 데이터의 개수 (학생 수)
    const colCount = relation[0].length;  // 속성의 개수 (칼럼 수)
    let candidateKeys = []; // 최종 후보키들을 담을 배열

    // 1. 칼럼 인덱스로 만들 수 있는 모든 조합 찾기 (예: [0], [1], [0,1], [0,2,3]...)
    // (비트 연산을 사용하면 이 과정을 아주 쉽게 처리할 수 있습니다. 1 << colCount는 2의 colCount 제곱입니다.)
    for (let i = 1; i < (1 << colCount); i++) {
        let currentCols = [];
        for (let j = 0; j < colCount; j++) {
            // 비트(이진수)를 확인해서 켜져 있는 자리의 인덱스만 배열에 담습니다.
            if ((i & (1 << j)) !== 0) {
                currentCols.push(j);
            }
        }

        // 2. 유일성 검사
        const set = new Set();
        for (let r = 0; r < rowCount; r++) {
            // 현재 조합된 칼럼들의 값만 뽑아서 문자열로 하나로 합침
            // 예: 0번(학번), 1번(이름) -> "100ryan"
            let rowString = currentCols.map(col => relation[r][col]).join(",");
            set.add(rowString);
        }

        // Set의 크기가 행의 개수와 같다면 모든 데이터가 구분된다는 뜻 (유일성 통과!)
        if (set.size === rowCount) {
            
            // 3. 최소성 검사
            // 이미 등록된 후보키(key)들 중에, 현재 칼럼 조합(currentCols)에 완전히 포함되는 게 있는지 확인
            let isMinimal = true;
            for (const key of candidateKeys) {
                // key의 모든 요소가 currentCols에 들어있다면, currentCols는 최소성을 만족하지 못함
                if (key.every(col => currentCols.includes(col))) {
                    isMinimal = false;
                    break;
                }
            }

            // 최소성까지 통과했다면 후보키로 등록!
            if (isMinimal) {
                candidateKeys.push(currentCols);
            }
        }
    }

    return candidateKeys.length; // 최종 등록된 후보키의 개수 반환
}