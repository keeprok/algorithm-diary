function solution(keymap, targets) {
  // 각 문자를 입력하기 위한 최소 누름 횟수 계산
  const minPress = {};
  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      const ch = key[i];
      if (minPress[ch] === undefined || minPress[ch] > i + 1) {
        minPress[ch] = i + 1; // i번째(0-indexed)면 i+1번 눌러야 함
      }
    }
  }

  return targets.map(target => {
    let count = 0;
    for (const ch of target) {
      if (minPress[ch] === undefined) return -1; // 입력 불가능한 문자 포함
      count += minPress[ch];
    }
    return count;
  });
}
// 1. keymap을 순회해 각 문자의 최소 누름 횟수를 미리 계산 (여러 keymap 중 최솟값)
// 2. target 문자열에서 입력 불가 문자 있으면 -1, 아니면 누름 횟수 합산
