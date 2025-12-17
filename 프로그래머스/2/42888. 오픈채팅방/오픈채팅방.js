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
