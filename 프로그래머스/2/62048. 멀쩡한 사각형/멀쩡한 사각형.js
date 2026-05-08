function solution(w, h) {
    // 1. 최대공약수(GCD) 구하기: 유클리드 호제법 (Lv.1~2로 갈 때 꼭 외워둬야 할 공식입니다)
    const getGCD = (a, b) => {
        while (b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    };
    
    // 2. 대각선이 지나가는 패턴 공식 적용
    // 못 쓰게 되는 사각형 = 가로 + 세로 - 최대공약수
    // (참고: w*h 값이 매우 커질 수 있지만, 자바스크립트는 안전하게 계산해냅니다)
    return w * h - (w + h - getGCD(w, h));
}