function solution(id_list, report, k) {

  const uniqueReports = new Set(report);

  const reportedCount = {};           
  uniqueReports.forEach(r => {
    const [from, to] = r.split(' ');
    reportedCount[to] = (reportedCount[to] || 0) + 1;
  });

  const banned = new Set(
    id_list.filter(user => (reportedCount[user] || 0) >= k)
  );

  const mailCount = {};
  id_list.forEach(user => (mailCount[user] = 0));

  uniqueReports.forEach(r => {
    const [from, to] = r.split(' ');
    if (banned.has(to)) {
      mailCount[from] += 1;
    }
  });

  return id_list.map(user => mailCount[user]);
}
