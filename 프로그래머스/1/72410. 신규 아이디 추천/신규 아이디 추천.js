function solution(new_id) {
  let s = new_id.toLowerCase();                 // 1

  s = s.replace(/[^a-z0-9\-_.]/g, "");          // 2
  s = s.replace(/\.{2,}/g, ".");                // 3
  s = s.replace(/^\.|\.$/g, "");                // 4

  if (s === "") s = "a";                         // 5

  if (s.length >= 16) {                          // 6
    s = s.slice(0, 15);
    s = s.replace(/\.$/, "");
  }

  while (s.length < 3) {                         // 7
    s += s[s.length - 1];
  }

  return s;
}
