function solution(p) {
  function transform(s) {
    // 빈 문자열이면 그대로 반환
    if (s === '') return '';

    // 균형잡힌 최소 단위 u 분리: '('와 ')'의 수가 같아지는 첫 지점
    let open = 0, close = 0, i = 0;
    while (open !== close || i === 0) {
      if (s[i] === '(') open++;
      else close++;
      i++;
    }

    const u = s.slice(0, i);
    const v = s.slice(i);

    // u가 올바른 괄호 문자열인지 확인 (닫는 괄호가 먼저 나오면 불량)
    let depth = 0, valid = true;
    for (const c of u) {
      if (c === '(') depth++;
      else depth--;
      if (depth < 0) { valid = false; break; }
    }

    if (valid) {
      // u가 올바른 괄호 → u + transform(v)
      return u + transform(v);
    } else {
      // u가 올바르지 않은 괄호 → '(' + transform(v) + ')' + (u 첫/마지막 제거 후 반전)
      const inner = u.slice(1, -1).split('').map(c => c === '(' ? ')' : '(').join('');
      return '(' + transform(v) + ')' + inner;
    }
  }

  return transform(p);
}
// 1. 균형잡힌 최소 단위 u 분리 (여는/닫는 괄호 수가 같아지는 첫 지점)
// 2. u가 올바른 괄호면 → u + transform(v) (재귀)
// 3. u가 올바르지 않으면 → '(' + transform(v) + ')' + (u 내부 반전)
//    - 문제에서 알고리즘이 명시되어 있어 그대로 구현
