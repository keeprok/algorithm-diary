function solution(fees, records) {
  const baseTime = fees[0];
  const baseFee = fees[1];
  const unitTime = fees[2];
  const unitFee = fees[3];

  const inMap = {};
  const totalMap = {};

  function toMin(time) {
    const arr = time.split(":");
    const h = Number(arr[0]);
    const m = Number(arr[1]);
    return h * 60 + m;
  }

  for (let i = 0; i < records.length; i++) {
    const arr = records[i].split(" ");
    const time = arr[0];
    const car = arr[1];
    const type = arr[2];

    if (type === "IN") {
      inMap[car] = toMin(time);
    } else {
      const outTime = toMin(time);
      const inTime = inMap[car];
      const parkTime = outTime - inTime;

      if (totalMap[car] === undefined) {
        totalMap[car] = 0;
      }

      totalMap[car] += parkTime;
      delete inMap[car];
    }
  }

  for (const car in inMap) {
    const parkTime = toMin("23:59") - inMap[car];

    if (totalMap[car] === undefined) {
      totalMap[car] = 0;
    }

    totalMap[car] += parkTime;
  }

  const cars = Object.keys(totalMap).sort();
  const answer = [];

  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const time = totalMap[car];

    if (time <= baseTime) {
      answer.push(baseFee);
    } else {
      const extraTime = time - baseTime;
      const extraFee = Math.ceil(extraTime / unitTime) * unitFee;
      answer.push(baseFee + extraFee);
    }
  }

  return answer;
}