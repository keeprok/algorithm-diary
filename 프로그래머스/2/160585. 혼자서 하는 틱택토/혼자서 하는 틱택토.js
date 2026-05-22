function solution(board) {
    let oCount = 0;
    let xCount = 0;

    // 1. O와 X의 개수 세기
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'O') oCount++;
            if (board[i][j] === 'X') xCount++;
        }
    }

    // 💡 승리 조건을 확인하는 헬퍼 함수
    const checkWin = (player) => {
        // 가로, 세로 확인
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
            if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
        }
        // 대각선 확인
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
        return false;
    };

    const oWin = checkWin('O');
    const xWin = checkWin('X');

    // 2. 심판의 레드카드(모순) 검사
    // 규칙 1: 개수 차이 오류
    if (xCount > oCount || oCount > xCount + 1) return 0;
    
    // 규칙 2: 둘 다 이기는 건 불가능
    if (oWin && xWin) return 0;
    
    // 규칙 3: O가 이겼는데 개수가 같으면 오류
    if (oWin && oCount === xCount) return 0;
    
    // 규칙 4: X가 이겼는데 O가 더 많으면 오류
    if (xWin && oCount > xCount) return 0;

    // 모든 모순을 통과했다면 정상적인 게임!
    return 1;
}