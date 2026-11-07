function solution(m, musicinfos) {
  // 두 글자 음표(#)를 한 글자로 치환해야 부분 문자열 비교가 정확함
  const conv = (s) =>
    s.replace(/C#/g, 'c').replace(/D#/g, 'd').replace(/F#/g, 'f')
     .replace(/G#/g, 'g').replace(/A#/g, 'a').replace(/B#/g, 'b');

  const toMin = (t) => {
    const [h, min] = t.split(':').map(Number);
    return h * 60 + min;
  };

  const target = conv(m);
  let answer = '(None)';
  let maxTime = -1;

  for (const info of musicinfos) {
    const [start, end, title, score] = info.split(',');
    const time = toMin(end) - toMin(start);
    const melody = conv(score);

    // 재생 시간만큼 악보를 반복(또는 자름)
    let played = '';
    for (let i = 0; i < time; i++) played += melody[i % melody.length];

    // 조건 만족곡이 여러 개면 재생 시간이 긴 곡, 같으면 먼저 입력된 곡
    if (played.includes(target) && time > maxTime) {
      maxTime = time;
      answer = title;
    }
  }

  return answer;
}
// 1. C# 등을 한 글자로 바꿔 "ABC"가 "ABCDEF"의 부분인지 오판하지 않게 함 (AB+C vs A+BC#)
// 2. (끝난시각-시작시각)분 동안 악보를 반복한 문자열이 네오가 들은 멜로디를 포함해야 함
// 3. 매칭된 곡 중 재생시간 최대, 동점이면 입력 순서가 앞선 곡 / 없으면 "(None)"
