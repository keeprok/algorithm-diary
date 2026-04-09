function solution(numbers) {
  return numbers.map((num) => {
    let x = BigInt(num);

    // 짝수면 +1
    if (x % 2n === 0n) {
      return Number(x + 1n);
    }

    // 홀수면 공식 사용
    const next = x + 1n + ((x ^ (x + 1n)) >> 2n);
    return Number(next);
  });
}
