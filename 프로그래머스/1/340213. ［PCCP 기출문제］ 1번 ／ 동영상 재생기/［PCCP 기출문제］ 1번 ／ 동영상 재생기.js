function solution(video_len, pos, op_start, op_end, commands) {
  // "MM:SS" → 초 단위로 변환
  const toSec = (str) => {
    const [m, s] = str.split(":").map(Number);
    return m * 60 + s;
  };

  // 초 → "MM:SS" 문자열로 변환
  const toStr = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const total = toSec(video_len);   // 영상 길이(초)
  const start = toSec(op_start);    // 오프닝 시작
  const end = toSec(op_end);        // 오프닝 끝 (end는 포함 X, [start, end) 구간)
  let cur = toSec(pos);             // 현재 위치(초)

  // 🔴 1. 시작할 때 이미 오프닝 구간 안에 있으면 바로 건너뛰기
  if (start <= cur && cur < end) {
    cur = end;
  }

  // 🔁 2. 명령어 하나씩 처리
  for (const cmd of commands) {
    // 2-1. next / prev 에 따라 위치 이동
    if (cmd === "next") cur += 10;
    else if (cmd === "prev") cur -= 10;

    // 2-2. 범위 벗어난 경우 보정
    if (cur < 0) cur = 0;
    if (cur > total) cur = total;

    // 2-3. 이동한 뒤 오프닝 구간 안이면 op_end로 건너뛰기
    if (start <= cur && cur < end) {
      cur = end;
    }
  }

  // 3. 최종 위치를 "MM:SS"로 변환해서 반환
  return toStr(cur);
}
