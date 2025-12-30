function solution(people, limit) {
  people.sort((a, b) => a - b);

  let l = 0;
  let r = people.length - 1;
  let cnt = 0;

  while (l <= r) {
    if (people[l] + people[r] <= limit) l++;
    r--;
    cnt++;
  }

  return cnt;
}
