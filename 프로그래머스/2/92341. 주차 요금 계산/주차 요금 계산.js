function solution(fees, records) {
  const [baseT, baseF, unitT, unitF] = fees;
  const toMin = (t) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  const inTime = new Map(); // 차량 → 입차 시각(분)
  const total = new Map();  // 차량 → 누적 주차 시간(분)

  for (const record of records) {
    const [time, car, type] = record.split(' ');
    if (type === 'IN') {
      inTime.set(car, toMin(time));
    } else {
      const dur = toMin(time) - inTime.get(car);
      total.set(car, (total.get(car) || 0) + dur);
      inTime.delete(car);
    }
  }

  // 출차 기록 없는 차량은 23:59에 출차 처리
  for (const [car, t] of inTime) {
    const dur = toMin('23:59') - t;
    total.set(car, (total.get(car) || 0) + dur);
  }

  // 차량번호 오름차순으로 요금 계산
  const cars = [...total.keys()].sort();
  return cars.map((car) => {
    const t = total.get(car);
    let fee = baseF;
    if (t > baseT) fee += Math.ceil((t - baseT) / unitT) * unitF; // 초과분 올림 과금
    return fee;
  });
}
// 1. IN/OUT 쌍으로 차량별 누적 주차 시간을 분 단위로 계산
// 2. OUT 없는 차량은 23:59에 출차한 것으로 간주
// 3. 기본요금 + 올림(초과시간/단위시간)*단위요금, 차량번호 순 정렬 반환
