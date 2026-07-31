function solution(genres, plays) {
  // 장르별 총 재생수 계산
  const genreTotal = {};
  for (let i = 0; i < genres.length; i++) {
    genreTotal[genres[i]] = (genreTotal[genres[i]] || 0) + plays[i];
  }

  // 장르별 노래 목록 [고유번호, 재생수] 저장
  const genreSongs = {};
  for (let i = 0; i < genres.length; i++) {
    if (!genreSongs[genres[i]]) genreSongs[genres[i]] = [];
    genreSongs[genres[i]].push([i, plays[i]]);
  }

  // 각 장르 내: 재생수 내림차순, 재생수 같으면 고유번호 오름차순
  for (const genre in genreSongs) {
    genreSongs[genre].sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  }

  const answer = [];
  // 총 재생수 높은 장르 순으로 각 장르에서 최대 2곡 수록
  Object.keys(genreTotal)
    .sort((a, b) => genreTotal[b] - genreTotal[a])
    .forEach(genre => {
      genreSongs[genre].slice(0, 2).forEach(([idx]) => answer.push(idx));
    });

  return answer;
}
// 1. 장르별 총 재생수를 Map으로 집계 → 총 재생수 높은 장르 순으로 정렬
// 2. 각 장르 내에서 재생수 내림차순, 동일 재생수면 고유번호 오름차순으로 최대 2곡 선택
