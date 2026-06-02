function solution(brown, yellow) {
  const total = brown + yellow
  for (let h =3 ; h<= Math.sqrt(total); h++){
      const w = total/h
      if( w < h)continue
      if (2 * w + 2 * h - 4 === brown){
          return [w ,h]
      }
  }
}
//1 . 갈색 은 테두리를 포함하다고 생각하고 2w +2h -4 = 테두리 
//2 . 갈색 + 노란색은 w*h  단 w>= h 이다 