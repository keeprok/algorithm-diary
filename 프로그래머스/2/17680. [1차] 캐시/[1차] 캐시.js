function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5; // 캐시 없으면 전부 miss

  const cache = []; // 앞=오래된 것, 뒤=최근 사용 (LRU)
  let time = 0;

  for (const city of cities) {
    const name = city.toLowerCase(); // 대소문자 구분 없음
    const idx = cache.indexOf(name);

    if (idx !== -1) {
      time += 1; // hit
      cache.splice(idx, 1);
      cache.push(name); // 최근 사용으로 이동
    } else {
      time += 5; // miss
      if (cache.length === cacheSize) cache.shift(); // 가장 오래된 것 제거
      cache.push(name);
    }
  }

  return time;
}
// 1. LRU: 캐시가 가득 차면 가장 오래 안 쓰인 도시를 내보내고 새 도시 삽입
// 2. hit이면 실행시간 +1 후 해당 도시를 맨 뒤로(최신), miss면 +5
// 3. cacheSize=0이면 모든 요청이 miss, 도시명은 대소문자 무시
