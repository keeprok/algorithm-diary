// 오픈채팅방 (해시)
// 1. record를 한 번 훑으며 uid별 최종 닉네임을 Map에 저장한다
// 2. Enter, Leave는 나중에 출력할 이벤트 목록에 uid와 함께 남긴다
// 3. Change는 닉네임만 Map에서 갱신하고 출력 이벤트는 만들지 않는다
// 4. 1차 순회가 끝나면 uid마다 마지막 닉네임이 확정된다
// 5. events를 순회하며 Map에서 최종 닉네임을 꺼내 문장을 만든다
// 6. Enter는 "님이 들어왔습니다.", Leave는 "님이 나갔습니다."로 붙인다
// 7. 완성된 문장 배열을 return

function solution(record) {
  const nameByUid = new Map();
  const events = [];

  for (const line of record) {
    const parts = line.split(" ");
    const type = parts[0];
    const uid = parts[1];

    if (type === "Enter") {
      const name = parts[2];
      nameByUid.set(uid, name);
      events.push([uid, "Enter"]);
    } else if (type === "Leave") {
      events.push([uid, "Leave"]);
    } else if (type === "Change") {
      const name = parts[2];
      nameByUid.set(uid, name);
    }
  }

  return events.map(([uid, type]) => {
    const name = nameByUid.get(uid);
    if (type === "Enter") return `${name}님이 들어왔습니다.`;
    return `${name}님이 나갔습니다.`;
  });
}
