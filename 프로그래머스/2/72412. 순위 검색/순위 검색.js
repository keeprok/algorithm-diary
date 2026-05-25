function solution(info, query) {
    const db = new Map(); // 검색어 사전을 만들 Map 객체

    // 1. 지원자 정보를 16가지 조합으로 쪼개서 사전에 넣는 재귀 함수
    const makeCombinations = (array, score, start) => {
        const key = array.join(""); // 예: "javabackendjuniorpizza"
        
        // 사전에 키가 있으면 기존 배열 가져오고, 없으면 새 배열 만들어서 점수 추가
        if (db.has(key)) db.get(key).push(score);
        else db.set(key, [score]);

        // 4개의 항목을 하나씩 '-'로 바꿔보며 재귀 호출 (총 16가지 생성됨)
        for (let i = start; i < array.length; i++) {
            const temp = [...array];
            temp[i] = "-"; // 현재 항목을 상관없음(-)으로 변경
            makeCombinations(temp, score, i + 1);
        }
    };

    // 지원자(info) 파싱해서 사전 DB 구축하기
    for (const applicant of info) {
        const data = applicant.split(" ");
        const score = Number(data.pop()); // 마지막 점수만 빼내기
        makeCombinations(data, score, 0); // 나머지 4개 항목으로 조합 시작
    }

    // 2. 이분 탐색을 위해 사전 안의 모든 점수 배열을 오름차순 정렬
    for (const [key, scores] of db) {
        scores.sort((a, b) => a - b);
    }

    // 3. 쿼리(query) 처리 및 이분 탐색으로 인원수 찾기
    const answer = [];
    for (const q of query) {
        // " and "를 모두 없애고 띄어쓰기 기준으로 쪼갬
        const data = q.replace(/ and /g, "").split(" ");
        const targetScore = Number(data.pop());
        const key = data.join(""); // 쿼리의 검색어 키 만들기

        const scores = db.get(key); // 사전에 등록된 점수 배열 가져오기

        if (scores) {
            // 커트라인(targetScore) 이상인 사람을 찾는 이분 탐색 (Lower Bound)
            let left = 0;
            let right = scores.length;

            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (scores[mid] >= targetScore) {
                    right = mid; // 점수가 충분하면 더 낮은 점수 쪽으로 범위 좁히기
                } else {
                    left = mid + 1; // 점수가 모자라면 더 높은 점수 쪽으로 범위 좁히기
                }
            }
            // 전체 인원에서 커트라인 미만인 사람(left)을 빼면 통과자 수가 나옵니다.
            answer.push(scores.length - left);
        } else {
            // 사전에 키조차 없다면 조건에 맞는 사람이 0명
            answer.push(0);
        }
    }

    return answer;
}
