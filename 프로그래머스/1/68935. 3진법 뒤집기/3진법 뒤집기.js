function solution(n) {
    // 이 모든 과정을 단 한 줄로 연결(체이닝)할 수 있습니다!
    const reversed3 = n.toString(3).split('').reverse().join('');
    
    // 3진수 형태의 문자열을 다시 10진수 정수로 변환하여 반환합니다.
    return parseInt(reversed3, 3);
}