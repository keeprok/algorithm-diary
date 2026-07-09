# [level 2] 네트워크 - 43162 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43162) 

### 구분

코딩테스트 연습 > 깊이／너비 우선 탐색（DFS／BFS）

### 문제 설명

<p>네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 같은 네트워크 상에 있다고 할 수 있습니다.</p>

<p>컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.</p>

<h5>제한사항</h5>

<ul>
<li>컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.</li>
<li>각 컴퓨터는 0부터 n-1인 정수로 표현합니다.</li>
<li>i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.</li>
<li>computer[i][i]는 항상 1입니다.</li>
</ul>

<h5>입출력 예</h5>

<table>
        <thead><tr>
<th>n</th>
<th>computers</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>[[1, 1, 0], [1, 1, 0], [0, 0, 1]]</td>
<td>2</td>
</tr>
<tr>
<td>3</td>
<td>[[1, 1, 0], [1, 1, 1], [0, 1, 1]]</td>
<td>1</td>
</tr>
</tbody>
      </table>
