function solution(edges) {
  // 각 노드의 진입차수(inDegree)와 진출차수(outDegree) 계산
  const inDegree = {};
  const outDegree = {};

  for (const [a, b] of edges) {
    outDegree[a] = (outDegree[a] || 0) + 1;
    inDegree[b] = (inDegree[b] || 0) + 1;
  }

  const nodes = new Set([...Object.keys(inDegree), ...Object.keys(outDegree)].map(Number));

  // 생성된 정점: 진입차수 0이고 진출차수 >= 2
  let generatedNode = 0;
  let donut = 0;
  let stick = 0;
  let eight = 0;

  for (const node of nodes) {
    const out = outDegree[node] || 0;
    const inn = inDegree[node] || 0;

    // 생성된 정점은 진입차수 0, 진출차수 2 이상
    if (inn === 0 && out >= 2) {
      generatedNode = node;
    }
    // 막대 그래프의 끝 노드: 진출차수 0
    if (out === 0) stick++;
    // 8자 그래프의 중간 노드: 진입차수 >= 2이고 진출차수 >= 2
    if (inn >= 2 && out >= 2) eight++;
  }

  // 도넛 수 = 생성 정점의 진출차수 - 막대 수 - 8자 수
  donut = (outDegree[generatedNode] || 0) - stick - eight;

  return [generatedNode, donut, stick, eight];
}
// 1. 생성된 정점: 진입차수 0, 진출차수 >= 2 (유일하게 들어오는 간선 없음)
// 2. 막대 끝 노드: 진출차수 0 → 막대 수 카운트
// 3. 8자 중간 노드: 진입/진출 모두 >= 2 → 8자 수 카운트
// 4. 도넛 수 = 생성 정점 진출차수 - 막대 수 - 8자 수
