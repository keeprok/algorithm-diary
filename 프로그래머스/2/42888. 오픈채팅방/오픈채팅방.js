function solution(record) {
  const nick = new Map(); // uid → 최신 닉네임
  const logs = [];        // [uid, 'Enter' | 'Leave']

  for (const row of record) {
    const [cmd, uid, name] = row.split(' ');
    if (cmd === 'Enter') {
      nick.set(uid, name);
      logs.push([uid, 'Enter']);
    } else if (cmd === 'Leave') {
      logs.push([uid, 'Leave']);
    } else {
      nick.set(uid, name); // Change: 닉만 갱신, 로그는 안 남김
    }
  }

  return logs.map(([uid, cmd]) => {
    const action = cmd === 'Enter' ? '들어왔습니다.' : '나갔습니다.';
    return `${nick.get(uid)}님이 ${action}`;
  });
}
// 1. Enter/Change마다 uid의 닉네임을 Map에 갱신 (최종 닉이 과거 로그에도 반영됨)
// 2. Leave는 닉이 안 들어오므로 Map은 건드리지 않고 로그만 기록
// 3. 마지막에 로그를 돌며 "닉네임님이 들어왔습니다/나갔습니다" 생성
