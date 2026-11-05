function solution(files) {
  const parse = (file) => {
    // HEAD(숫자 전) + NUMBER(연속 숫자 최대 5) + TAIL
    const m = file.match(/^([^0-9]+)([0-9]{1,5})(.*)$/);
    return {
      origin: file,
      head: m[1].toLowerCase(), // 대소문자 무시
      number: Number(m[2]),     // 앞의 0은 Number가 제거
    };
  };

  return files
    .map(parse)
    .sort((a, b) => {
      if (a.head !== b.head) return a.head < b.head ? -1 : 1;
      if (a.number !== b.number) return a.number - b.number;
      return 0; // HEAD·NUMBER 같으면 입력 순서 유지 (stable sort)
    })
    .map((f) => f.origin);
}
// 1. 파일명을 HEAD / NUMBER / TAIL 로 분리
// 2. 정렬 기준: HEAD 사전순(대소문자 무시) → NUMBER 숫자 오름차순 → 원래 순서
// 3. TAIL은 정렬에 사용하지 않음
