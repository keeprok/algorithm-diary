function solution(keyinput, board) {
  let x = 0, y = 0;
  const mx = Math.floor(board[0] / 2);
  const my = Math.floor(board[1] / 2);

  for (const k of keyinput) {
    let nx = x, ny = y;

    if (k === "left") nx--;
    else if (k === "right") nx++;
    else if (k === "up") ny++;
    else if (k === "down") ny--;


    if (-mx <= nx && nx <= mx && -my <= ny && ny <= my) {
      x = nx; y = ny;
    }
  }

  return [x, y];
}
