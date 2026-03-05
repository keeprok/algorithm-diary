function solution(bridge_length, weight, truck_weights) {
  const bridge = Array(bridge_length).fill(0);
  let sum = 0;
  let time = 0;

  while (truck_weights.length || sum > 0) {
    time++;

    sum -= bridge.shift();

    if (truck_weights.length && sum + truck_weights[0] <= weight) {
      const x = truck_weights.shift();
      bridge.push(x);
      sum += x;
    } else {
      bridge.push(0);
    }
  }

  return time;
}