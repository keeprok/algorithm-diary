function solution(msg) {
  // 사전 초기화: 알파벳 A~Z를 1~26으로 등록
  const dict = {};
  for (let i = 0; i < 26; i++) {
    dict[String.fromCharCode(65 + i)] = i + 1;
  }

  let nextCode = 27;
  const result = [];
  let w = ''; // 현재 처리 중인 문자열

  for (const c of msg) {
    const wc = w + c;
    if (dict[wc] !== undefined) {
      // wc가 사전에 있으면 w를 확장
      w = wc;
    } else {
      // wc가 사전에 없으면 w의 코드 출력, wc를 새 항목으로 등록
      result.push(dict[w]);
      dict[wc] = nextCode++;
      w = c; // w를 현재 문자 c로 리셋
    }
  }

  // 마지막 w의 코드 출력
  result.push(dict[w]);
  return result;
}
// 1. LZW 압축: 사전에 있는 가장 긴 문자열(w)을 찾아 코드로 출력
// 2. w+c가 사전에 없을 때 → w 코드 출력, w+c를 다음 코드로 등록, w = c
// 3. 입력이 끝나면 마지막 w를 출력
