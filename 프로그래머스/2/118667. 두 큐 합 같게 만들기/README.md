# [level 2] 두 큐 합 같게 만들기 - 118667

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/118667)

### 구분

코딩테스트 연습 > 스택／큐

### 문제 설명

<p>길이가 같은 두 개의 큐가 주어집니다. 하나의 큐를 골라 원소를 추출(pop)하고, 추출된 원소를 다른 큐에 집어넣는(insert) 작업을 통해 각 큐의 원소 합이 같도록 만들려고 합니다.</p>

<p>이때 필요한 작업의 최솟값을 return 하도록 solution 함수를 완성해주세요. 단, 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return 해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>1 ≤ queue1의 길이 = queue2의 길이 ≤ 300,000</li>
<li>1 ≤ queue1의 원소, queue2의 원소 ≤ 10^9</li>
<li>주의: 원소의 합이 int 범위를 넘어갈 수 있습니다. 쉽게 풀기 위해 BigInt 사용을 권장하지 않습니다.</li>
</ul>

<h5>입출력 예</h5>

<table>
  <thead><tr>
    <th>queue1</th>
    <th>queue2</th>
    <th>result</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>[3, 2, 7, 2]</td>
      <td>[4, 6, 5, 1]</td>
      <td>2</td>
    </tr>
    <tr>
      <td>[1, 2, 1, 2]</td>
      <td>[1, 10, 1, 2]</td>
      <td>7</td>
    </tr>
    <tr>
      <td>[1, 1]</td>
      <td>[1, 5]</td>
      <td>-1</td>
    </tr>
  </tbody>
</table>
