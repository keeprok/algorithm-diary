# [level 2] 과제 진행하기 - 176962

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/176962)

### 구분

코딩테스트 연습 > 스택／큐

### 문제 설명

<p>과제를 할 시간이 다되었을 때, 새로운 과제를 시작해야 하면 하던 과제를 멈추고 새 과제를 시작합니다. 멈춘 과제는 나중에 이어서 합니다. 과제를 끝낸 순서대로 이름을 담아 return 하세요.</p>

<h5>제한사항</h5>

<ul>
<li>3 ≤ plans의 길이 ≤ 1,000</li>
<li>plans[i] = [name, start, playtime]</li>
<li>start는 "HH:MM" 형식, 00:00 ~ 23:59</li>
<li>1 ≤ playtime ≤ 100</li>
</ul>

<h5>입출력 예</h5>

<table>
  <thead><tr><th>plans</th><th>result</th></tr></thead>
  <tbody>
    <tr><td>[["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]</td><td>["korean", "english", "math"]</td></tr>
  </tbody>
</table>
