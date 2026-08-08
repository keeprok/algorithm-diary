function solution(expression) {
  // 수식을 숫자 배열과 연산자 배열로 분리
  const nums = expression.split(/[+\-*]/).map(Number);
  const ops = expression.match(/[+\-*]/g);

  // +, -, * 세 연산자의 우선순위 순열 6가지
  const perms = [
    ['+', '-', '*'], ['+', '*', '-'],
    ['-', '+', '*'], ['-', '*', '+'],
    ['*', '+', '-'], ['*', '-', '+'],
  ];

  function calc(priority) {
    const ns = [...nums];
    const os = [...ops];

    for (const op of priority) {
      while (os.includes(op)) {
        const idx = os.indexOf(op);
        let result;
        if (op === '+') result = ns[idx] + ns[idx + 1];
        else if (op === '-') result = ns[idx] - ns[idx + 1];
        else result = ns[idx] * ns[idx + 1];

        // 계산 결과로 두 숫자를 합치고 연산자 제거
        ns.splice(idx, 2, result);
        os.splice(idx, 1);
      }
    }

    return Math.abs(ns[0]);
  }

  return Math.max(...perms.map(calc));
}
// 1. 수식을 숫자 배열과 연산자 배열로 분리 (정규식 활용)
// 2. +, -, * 세 연산자의 우선순위 순열 6가지를 완전탐색
// 3. 각 우선순위로 순서대로 계산 후 결과의 절댓값 최댓값 반환
