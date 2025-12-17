function solution(want, number, discount) {
  const need = new Map();
  for (let i = 0; i < want.length; i++) {
    need.set(want[i], number[i]);
  }

  const window = new Map();

  const add = (item, delta) => {
    window.set(item, (window.get(item) || 0) + delta);
    if (window.get(item) === 0) window.delete(item);
  };

 
  if (discount.length < 10) return 0;


  for (let i = 0; i < 10; i++) add(discount[i], 1);

  const match = () => {
    for (const [item, cnt] of need.entries()) {
      if ((window.get(item) || 0) !== cnt) return false;
    }
    return true;
  };

  let ans = 0;
  if (match()) ans++;

  for (let start = 1; start <= discount.length - 10; start++) {
    add(discount[start - 1], -1);       
    add(discount[start + 9], 1);       
    if (match()) ans++;
  }

  return ans;
}
