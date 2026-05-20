function solution(m, musicinfos) {
    // 1. '#'이 붙은 두 글자 음표를 소문자 한 글자로 치환하는 마법의 헬퍼 함수
    const replaceSharp = (melody) => {
        return melody
            .replace(/C#/g, 'c')
            .replace(/D#/g, 'd')
            .replace(/F#/g, 'f')
            .replace(/G#/g, 'g')
            .replace(/A#/g, 'a');
    };

    // 네오가 기억하는 멜로디도 치환해 둡니다.
    m = replaceSharp(m);
    
    let answer = "(None)";
    let maxPlayTime = 0; // 조건이 겹칠 때 가장 길게 재생된 곡을 찾기 위함

    for (const info of musicinfos) {
        // 2. 쉼표(,)를 기준으로 문자열 쪼개기
        let [start, end, title, sheet] = info.split(',');

        // 3. 재생 시간(분) 구하기 (':' 기준으로 쪼개서 계산)
        const [startH, startM] = start.split(':').map(Number);
        const [endH, endM] = end.split(':').map(Number);
        const playTime = (endH * 60 + endM) - (startH * 60 + startM);

        // 4. 악보도 샵 치환
        sheet = replaceSharp(sheet);

        // 5. 실제 재생된 멜로디 만들기 (어제 배운 repeat 출동!)
        // 악보를 시간만큼 넉넉하게 반복해서 이어 붙인 뒤, 재생 시간(playTime)만큼 딱 자릅니다.
        const played = sheet.repeat(Math.ceil(playTime / sheet.length)).slice(0, playTime);

        // 6. 네오가 기억하는 멜로디(m)가 실제 재생된 멜로디(played) 안에 있는지 확인
        if (played.includes(m)) {
            // 조건이 일치하는 음악 중 재생 시간이 제일 긴 음악을 저장
            if (playTime > maxPlayTime) {
                maxPlayTime = playTime;
                answer = title;
            }
        }
    }

    return answer;
}