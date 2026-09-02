function solution(phone_book) {
  // 정렬하면 접두사 관계인 번호들이 반드시 인접하게 됨
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    // 앞 번호가 뒤 번호의 접두사이면 false
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}
// 1. 정렬 후 인접한 두 번호만 비교하면 모든 접두사 관계를 탐지 가능
//    ex) ["119", "11923", "97"] → 정렬 후 ["11923", "119", "97"] 아님
//        정렬 → ["119", "11923", "97"] → "119"가 "11923"의 접두사 → false
// 2. 모든 인접 쌍을 통과하면 접두사 관계 없음 → true
