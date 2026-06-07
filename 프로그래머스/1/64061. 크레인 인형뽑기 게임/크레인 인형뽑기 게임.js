function solution(board, moves) {
  // 1. 바구니(스택)와 제거 개수를 준비한다
  const n = board.length;
  const basket = []; // 맨 위 인형 = basket[basket.length - 1]
  let removed = 0;

  // 2. moves 순서대로 해당 열에서 인형을 하나 뽑는다
  for (const move of moves) {
    const col = move - 1; // 1번 열 → 인덱스 0

    for (let row = 0; row < n; row++) {
      const doll = board[row][col];

      // 3. 0이 아닌 첫 인형을 찾으면 뽑고(0 처리), 바구니에 넣는다
      if (doll !== 0) {
        board[row][col] = 0;

        const top = basket[basket.length - 1]; // 바구니 맨 위
        if (top === doll) {
          // 4. 맨 위 2개가 같으면 pop해서 2개 제거
          basket.pop();
          removed += 2;
        } else {
          basket.push(doll);
        }
        break; // 이 열에서는 인형 1개만 뽑음
      }
    }
  }

  // 5. 제거한 인형 개수를 반환한다
  return removed;
}
// 1. 바구니는 배열로 만들고, 맨 위 원소가 스택 top이다
// 2. moves에 적힌 열 순서대로 위에서부터 인형을 찾는다
// 3. 인형을 뽑으면 board에서 0으로 지우고 바구니에 넣는다
// 4. 넣기 전에 바구니 top과 같으면 pop + removed += 2
// 5. 모든 move 후 removed를 반환한다
