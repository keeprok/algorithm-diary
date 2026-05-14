function solution(files) {
    // files 배열을 조건에 맞게 정렬합니다.
    return files.sort((a, b) => {
        // 1. 파일명에서 HEAD와 NUMBER 추출하기
        // 정규식 해석: 시작부분(^)부터 숫자가아닌것들([^0-9]+)과 숫자들([0-9]{1,5})을 그룹지어 찾음
        const regex = /^([^0-9]+)([0-9]{1,5})/; 
        
        const matchA = a.match(regex);
        const matchB = b.match(regex);
        
        // 2. HEAD 비교하기 (대소문자 구분 안 하므로 모두 소문자로 변환)
        const headA = matchA[1].toLowerCase();
        const headB = matchB[1].toLowerCase();
        
        if (headA < headB) return -1; // a가 사전순으로 앞서면 a를 앞으로
        if (headA > headB) return 1;  // b가 앞서면 b를 앞으로
        
        // 3. HEAD가 완전히 똑같다면 NUMBER 비교하기
        // 앞에 붙은 '0'을 무시하고 진짜 숫자로 크기를 비교하기 위해 parseInt 사용
        const numA = parseInt(matchA[2]);
        const numB = parseInt(matchB[2]);
        
        return numA - numB; // numA가 더 작으면 음수가 나와서 자연스럽게 오름차순 정렬됨
    });
}