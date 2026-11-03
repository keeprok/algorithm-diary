function solution(board) {
  const b = board.map((row) => row.split(''));
  let o = 0;
  let x = 0;
  for (const row of b) {
    for (const ch of row) {
      if (ch === 'O') o++;
      if (ch === 'X') x++;
    }
  }

  const win = (ch) => {
    for (let i = 0; i < 3; i++) {
      if (b[i][0] === ch && b[i][1] === ch && b[i][2] === ch) return true;
      if (b[0][i] === ch && b[1][i] === ch && b[2][i] === ch) return true;
    }
    if (b[0][0] === ch && b[1][1] === ch && b[2][2] === ch) return true;
    if (b[0][2] === ch && b[1][1] === ch && b[2][0] === ch) return true;
    return false;
  };

  const oWin = win('O');
  const xWin = win('X');

  // O가 선공 → O는 X보다 같거나 하나 많아야 함
  if (x > o || o > x + 1) return 0;
  // 둘 다 이길 수는 없음
  if (oWin && xWin) return 0;
  // O가 이겼으면 O가 하나 더 많아야 함 (마지막 수가 O)
  if (oWin && o !== x + 1) return 0;
  // X가 이겼으면 개수가 같아야 함 (마지막 수가 X)
  if (xWin && o !== x) return 0;

  return 1;
}
// 1. 선공은 O → 돌 개수는 O == X 또는 O == X+1
// 2. 승리가 났다면 그 직후 게임이 끝났어야 하므로 상대가 더 두면 안 됨
// 3. 위 규칙을 모두 지키면 가능한 상태(1), 아니면 0
