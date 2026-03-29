function solution(str1, str2) {
  function makeArr(str) {
    const result = [];
    str = str.toLowerCase();

    for (let i = 0; i < str.length - 1; i++) {
      const word = str[i] + str[i + 1];
      if (/[a-z]{2}/.test(word)) {
        result.push(word);
      }
    }

    return result;
  }

  const arr1 = makeArr(str1);
  const arr2 = makeArr(str2);

  let same = 0;
  const copy2 = [...arr2];

  for (let i = 0; i < arr1.length; i++) {
    const idx = copy2.indexOf(arr1[i]);
    if (idx !== -1) {
      same++;
      copy2.splice(idx, 1);
    }
  }

  const union = arr1.length + arr2.length - same;

  if (union === 0) return 65536;
  return Math.floor((same / union) * 65536);
}