function solution(n, a, b) {
  let round = 0;

  // 매 라운드마다 두 선수의 번호를 절반으로 줄이며 같아질 때까지 반복
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }

  return round;
}
// 1. 토너먼트에서 한 라운드가 지나면 번호가 Math.ceil(x / 2)로 바뀜
//    → 같은 조끼리 묶이면 번호가 같아짐
// 2. a와 b가 같아지면 그 라운드에서 처음 만남 → round 반환
// ex) n=8, a=4, b=7 → 라운드1: a=2, b=4 → 라운드2: a=1, b=2 → 라운드3: a=1, b=1 → 3라운드
