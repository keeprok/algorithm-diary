function solution(sizes) {
  let maxW = 0;
  let maxH = 0;
    
    for (const [w, h] of sizes) {
    const long = Math.max(w, h);  
    const short = Math.min(w, h); 
    maxW = Math.max(maxW, long);
    maxH = Math.max(maxH, short);
  }
      return maxW * maxH;
}
//1. 가로 , 세로 를 sort 를 돌려서 전부 높은값 ,낮은값으로 정리
//2. 각길이 높은값 곱하고 return 