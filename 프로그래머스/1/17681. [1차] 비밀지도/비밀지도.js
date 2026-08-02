function solution(n, arr1, arr2) {
  return arr1.map((a, i) => {
    // 두 지도를 비트 OR로 합침: 둘 중 하나라도 1(벽)이면 벽
    const combined = a | arr2[i];
    // n자리 이진수로 변환 후 1→'#'(벽), 0→' '(공백)
    return combined.toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' ');
  });
}
// 1. 비트 OR(|)로 두 지도를 합침 → 어느 한쪽이 벽이면 최종 벽
// 2. n자리 이진수로 변환, padStart로 앞 빈 자리 0 채운 뒤 1→'#', 0→' ' 치환
