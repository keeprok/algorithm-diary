function solution(h1, m1, s1, h2, m2, s2) {
  const toSec = (h, m, s) => h * 3600 + m * 60 + s;
  const start = toSec(h1, m1, s1);
  const end = toSec(h2, m2, s2);

  let answer = 0;
  const startMin = Math.floor(start / 60);
  const endMin = Math.floor(end / 60);

  for (let min = startMin; min <= endMin; min++) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    const secM = (60 * m) / 59; // 초침=분침
    const secH = (3600 * (h % 12) + 60 * m) / 719; // 초침=시침

    const inRange = (sec) => {
      if (sec >= 60) return false; // 59→00, 11→12는 그 분에 안 만남
      const t = h * 3600 + m * 60 + sec;
      return t >= start && t <= end;
    };

    if (secM === secH) {
      if (inRange(secM)) answer++; // 0시·12시 정각은 한 번만
    } else {
      if (inRange(secM)) answer++;
      if (inRange(secH)) answer++;
    }
  }

  return answer;
}
// 1. 구간이 하루(86400초)뿐이라 분 단위로 겹침 시각만 세면 O(1~1440)
// 2. 초침이 한 바퀴 돌 때 분침·시침을 각 1회 추월, 식은 s=60m/59, s=(3600*(h%12)+60m)/719
// 3. sec≥60이면 그 분에는 안 겹침. 세 바늘이 같으면 알람 1회
