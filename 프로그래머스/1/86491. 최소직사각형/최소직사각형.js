function solution(sizes) {
  let mx = 0;
  let my = 0;

  for (const [w, h] of sizes) {
    const a = w > h ? w : h; 
    const b = w > h ? h : w; 
    if (a > mx) mx = a;
    if (b > my) my = b;
  }

  return mx * my;
}
