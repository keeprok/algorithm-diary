function solution(board, moves) {
  const n = board.length;
  // 각 열의 "맨 위" 인형을 빠르게 꺼내기 위해 열별 스택 구성 (위가 top)
  const columns = [];
  for (let c = 0; c < n; c++) {
    const col = [];
    for (let r = n - 1; r >= 0; r--) {
      if (board[r][c] !== 0) col.push(board[r][c]); // 아래→위 순으로 쌓음
    }
    columns.push(col);
  }

  const basket = [];
  let answer = 0;

  for (const move of moves) {
    const col = columns[move - 1]; // 1-based → 0-based
    if (col.length === 0) continue; // 빈 열이면 스킵

    const doll = col.pop(); // 맨 위 인형 꺼내기

    // 바구니 top과 같으면 둘 다 터뜨림
    if (basket.length && basket[basket.length - 1] === doll) {
      basket.pop();
      answer += 2;
    } else {
      basket.push(doll);
    }
  }

  return answer;
}
// 1. 각 열을 스택으로 변환 (맨 위 인형이 top에 오도록 아래부터 쌓음)
// 2. 집은 인형과 바구니 top이 같으면 둘 다 제거(answer += 2), 아니면 push
// 3. 터진 인형 총 개수가 정답
