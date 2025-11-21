function solution(cacheSize, cities) {

  let time = 0;

  const cache = [];

  for (let city of cities) {

    city = city.toLowerCase();
      
    if (cacheSize === 0) {
      time += 5;
      continue;
    }
    const idx = cache.indexOf(city); 

    if (idx !== -1) {
      time += 1;
      cache.splice(idx, 1);
      cache.push(city);
    } else {
        
      time += 5;

      if (cache.length === cacheSize) {
        cache.shift(); 
      }
        
      cache.push(city);
    }
  }

  return time;
}
