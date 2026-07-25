# [level 2] 카카오프렌즈 컬러링북 - 1829

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/1829)

### 구분

코딩테스트 연습 > 깊이／너비 우선 탐색（DFS／BFS）

### 문제 설명

<p>넓이가 m, 세로 길이가 n인 이미지가 있습니다. 이미지는 각 칸마다 색상 번호가 있으며, 같은 색상이 상하좌우로 연결된 영역의 수와 가장 큰 영역의 크기를 구하세요.</p>

<h5>제한사항</h5>

<ul>
<li>1 ≤ m, n ≤ 100</li>
<li>그림의 색상 수 ≤ 2^31</li>
<li>색상 번호 0은 색칠하지 않은 영역입니다.</li>
</ul>

<h5>입출력 예</h5>

<table>
  <thead><tr><th>m</th><th>n</th><th>picture</th><th>answer</th></tr></thead>
  <tbody>
    <tr><td>6</td><td>4</td><td>[[1,1,1,0],[1,2,2,0],[1,0,0,1],[0,0,0,1],[0,0,0,3],[0,0,0,3]]</td><td>[4, 5]</td></tr>
  </tbody>
</table>
