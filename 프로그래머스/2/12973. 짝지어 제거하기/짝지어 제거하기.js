function solution(s) {
 
  
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];               
    const last = stack[stack.length - 1]; 

    if (last === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0 ? 1 : 0;
}