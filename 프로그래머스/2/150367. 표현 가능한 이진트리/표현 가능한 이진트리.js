function solution(numbers) {
  function isPossible(node) {
    // 모두 0이거나 모두 1이면 유효한 트리
    if (!/[^0]/.test(node)) return true;
    if (!/[^1]/.test(node)) return true;

    const mid = Math.floor(node.length / 2);
    // 루트가 0인데 자식이 있으면 불가능 (0은 null 노드)
    if (node[mid] === '0') return false;

    // 왼쪽, 오른쪽 서브트리 재귀 검사
    return isPossible(node.slice(0, mid)) && isPossible(node.slice(mid + 1));
  }

  return numbers.map(n => {
    let bin = n.toString(2);
    // 포화 이진트리 크기(2^k - 1)에 맞게 앞에 0 패딩
    let size = 1;
    while (size < bin.length) size = size * 2 + 1;
    bin = bin.padStart(size, '0');

    return isPossible(bin) ? 1 : 0;
  });
}
// 1. 이진수를 포화 이진트리 크기(2^k-1)에 맞게 0 패딩
// 2. 중간 인덱스가 루트, 루트가 0이면 자식 존재 불가 → false
// 3. 좌/우 서브트리 재귀 검사 (DFS 분할)
