function solution(book_time) {
  const rooms = [];

  book_time = book_time
    .map(([start, end]) => [toMin(start), toMin(end) + 10])
    .sort((a, b) => a[0] - b[0]);

  for (const [start, end] of book_time) {
    rooms.sort((a, b) => a - b);

    if (rooms.length > 0 && rooms[0] <= start) {
      rooms[0] = end;
    } else {
      rooms.push(end);
    }
  }

  return rooms.length;
}

function toMin(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}