// 조이스틱 (탐욕법)
// 1. 각 문자마다 위/아래로 알파벳을 맞추는 최소 횟수를 구한다
// 2. 'A'에서 올라가는 것과 'Z'에서 내려가는 것 중 작은 값을 answer에 더한다
// 3. 좌우 이동은 오른쪽만 가는 게 아니라 중간에 왼쪽으로 돌아갈 수도 있다
// 4. 연속된 'A' 구간은 건너뛰고 다음으로 바꿔야 할 문자 위치를 찾는다
// 5. (앞에서 왔다 갔다), (뒤로 갔다 앞으로 오기) 두 경로 중 더 짧은 이동을 minMove에 갱신한다
// 6. 알파벳 변경 횟수 + minMove를 return

function solution(name) {
  let answer = 0;
  let minMove = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i);
    answer += Math.min(charCode - 65, 91 - charCode);

    let nextIndex = i + 1;
    while (nextIndex < name.length && name[nextIndex] === "A") {
      nextIndex++;
    }

    minMove = Math.min(
      minMove,
      i * 2 + name.length - nextIndex,
      i + 2 * (name.length - nextIndex)
    );
  }

  return answer + minMove;
}
