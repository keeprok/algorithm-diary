// 마법의 엘리베이터 (탐욕법)
// 1. 1의 자리부터 한 자리씩 내려가며 버튼을 누를 횟수를 계산한다
// 2. 현재 자릿수가 5보다 작으면 올리는 쪽이 더 적으므로 digit만 더한다
// 3. 5보다 크면 10 - digit 만큼 내리고 윗자리를 1 올린다
// 4. 자릿수가 정확히 5이면 다음 윗자리를 보고 올림 여부를 결정한다
// 5. 다음 자리가 5 이상이면 올림하는 편이 유리하므로 +5 후 carry 한다
// 6. 다음 자리가 5 미만이면 올리지 않고 +5만 한 뒤 윗자리만 내린다
// 7. storey가 0이 될 때까지 반복 후 answer return

function solution(storey) {
  let answer = 0;

  while (storey > 0) {
    const digit = storey % 10;
    const next = Math.floor(storey / 10) % 10;

    if (digit < 5) {
      answer += digit;
      storey = Math.floor(storey / 10);
    } else if (digit > 5) {
      answer += 10 - digit;
      storey = Math.floor(storey / 10) + 1;
    } else if (next >= 5) {
      answer += 5;
      storey = Math.floor(storey / 10) + 1;
    } else {
      answer += 5;
      storey = Math.floor(storey / 10);
    }
  }

  return answer;
}
