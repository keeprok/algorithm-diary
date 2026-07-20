# [level 2] 붕대 감기 - 250137

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/250137)

### 구분

코딩테스트 연습 > PCCP 기출문제 > 1번

### 문제 설명

<p>게임 캐릭터가 붕대 감기 기술을 사용해 체력을 회복합니다. 붕대 감기는 t초 동안 사용하며 매 초 x의 체력을 회복하고, t초를 채우면 y만큼 추가 회복합니다. 몬스터에게 공격을 받으면 붕대 감기가 끊깁니다.</p>

<p>캐릭터가 모든 공격을 받은 후 생존하면 남은 체력을, 사망하면 -1을 반환하세요.</p>

<h5>제한사항</h5>

<ul>
<li>1 ≤ bandage의 t, x, y ≤ 100</li>
<li>1 ≤ health ≤ 100,000</li>
<li>1 ≤ attacks의 길이 ≤ 100</li>
</ul>

<h5>입출력 예</h5>

<table>
  <thead><tr><th>bandage</th><th>health</th><th>attacks</th><th>result</th></tr></thead>
  <tbody>
    <tr><td>[5, 1, 5]</td><td>30</td><td>[[2, 10], [9, 15], [10, 5], [11, 5]]</td><td>5</td></tr>
    <tr><td>[3, 2, 7]</td><td>20</td><td>[[1, 15], [5, 16], [8, 6]]</td><td>-1</td></tr>
  </tbody>
</table>
