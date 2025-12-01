function solution(n, lost, reserve) {
  
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

 
  const realLost = [];
  const realReserve = [];


  const reserveSet = new Set(reserve);

  for (const l of lost) {
    if (reserveSet.has(l)) {
    
      reserveSet.delete(l); 
    } else {
      realLost.push(l);
    }
  }


  let cannot = 0; 

  for (const l of realLost) {

    if (reserveSet.has(l - 1)) {
      reserveSet.delete(l - 1); 
      continue;
    }

    if (reserveSet.has(l + 1)) {
      reserveSet.delete(l + 1); 
      continue;
    }

   
    cannot++;
  }

  return n - cannot;
}


// 1.  잃어버린 인원 세고, -1 / +1에 reserve 있는지 확인하고, 겹치는 애는 한 번만 처리
// 2.  단 lost 와 reserve 겹치는건 둘다삭제
