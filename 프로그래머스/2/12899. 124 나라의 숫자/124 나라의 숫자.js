function solution(n) {
    let answer = '';
    
    while(n>0){
        const r = n % 3;
        if (r === 1) answer = '1' + answer;
        else if (r === 2) answer = '2' + answer;
        else answer = '4' + answer;    
         n = r === 0 ? Math.floor(n / 3) - 1 : Math.floor(n / 3);
    }
    return answer;
}
// 1. 124 나라는 1, 2, 4 세 숫자만 사용 (0이 없는 3진법)
// 2. n%3 == 1 → "1", 2 → "2", 0 → "4" 를 앞에 붙임
// 3. n%3 == 0이면 n = Math.floor(n/3) - 1, 아니면 n = Math.floor(n/3)
// 4. n이 0이 될 때까지 반복