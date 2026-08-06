function solution(places) {
  function check(room) {
    const people = [];
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (room[r][c] === 'P') people.push([r, c]);
      }
    }

    for (let i = 0; i < people.length; i++) {
      for (let j = i + 1; j < people.length; j++) {
        const [r1, c1] = people[i];
        const [r2, c2] = people[j];
        const dist = Math.abs(r1 - r2) + Math.abs(c1 - c2);

        if (dist > 2) continue; // 맨해튼 거리 2 초과는 무조건 안전

        if (dist === 1) return false; // 바로 인접 → 즉시 위반

        // 맨해튼 거리가 정확히 2인 경우: 경로 중간에 파티션이 없으면 위반
        if (r1 === r2) {
          // 같은 행: 중간 열 확인
          if (room[r1][(c1 + c2) / 2] !== 'X') return false;
        } else if (c1 === c2) {
          // 같은 열: 중간 행 확인
          if (room[(r1 + r2) / 2][c1] !== 'X') return false;
        } else {
          // 대각선: (r1,c2), (r2,c1) 두 우회 경로 중 하나라도 X가 없으면 위반
          if (room[r1][c2] !== 'X' || room[r2][c1] !== 'X') return false;
        }
      }
    }

    return true;
  }

  return places.map(place => (check(place) ? 1 : 0));
}
// 1. 5x5 대기실에서 P(사람) 쌍의 맨해튼 거리가 2 이하면 경로 확인
// 2. 거리 1: 바로 인접 → 위반
//    거리 2, 같은 행/열: 중간 칸에 X 없으면 위반
//    거리 2, 대각선: 두 우회 경로 중 X 없는 경로 있으면 위반
