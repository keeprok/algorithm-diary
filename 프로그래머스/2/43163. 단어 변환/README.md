# [level 2] 단어 변환 - 43163

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43163)

### 구분

코딩테스트 연습 > 깊이／너비 우선 탐색（DFS／BFS）

### 문제 설명

<p>두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.</p>

<ol>
<li>한 번에 한 개의 알파벳만 바꿀 수 있습니다.</li>
<li>words에 있는 단어로만 변환할 수 있습니다.</li>
</ol>

<p>begin에서 target으로 변환하는 가장 짧은 변환 과정의 길이를 return 하도록 solution 함수를 완성하세요. 변환할 수 없는 경우에는 0을 return 합니다.</p>

<h5>제한사항</h5>

<ul>
<li>각 단어는 알파벳 소문자로만 이루어져 있습니다.</li>
<li>각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.</li>
<li>words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.</li>
<li>begin과 target은 같지 않습니다.</li>
</ul>

<h5>입출력 예</h5>

<table>
  <thead><tr><th>begin</th><th>target</th><th>words</th><th>return</th></tr></thead>
  <tbody>
    <tr><td>"hit"</td><td>"cog"</td><td>["hot", "dot", "dog", "lot", "log", "cog"]</td><td>4</td></tr>
    <tr><td>"hit"</td><td>"cog"</td><td>["hot", "dot", "dog", "lot", "log"]</td><td>0</td></tr>
  </tbody>
</table>
