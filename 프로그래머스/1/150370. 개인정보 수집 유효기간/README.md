# [level 1] 개인정보 수집 유효기간 - 150370

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/150370)

### 구분

코딩테스트 연습 > 2023 KAKAO BLIND RECRUITMENT

### 문제 설명

<p>오늘 날짜와 약관 유효기간, 개인정보 수집 일자와 약관 종류가 주어질 때, 오늘 날짜를 기준으로 파기해야 할 개인정보의 번호를 오름차순으로 return 하세요.</p>

<h5>제한사항</h5>

<ul>
<li>월은 28일로 고정합니다.</li>
<li>1 ≤ terms의 길이 ≤ 20</li>
<li>1 ≤ privacies의 길이 ≤ 100</li>
</ul>

<h5>입출력 예</h5>

<table>
  <thead><tr><th>today</th><th>terms</th><th>privacies</th><th>result</th></tr></thead>
  <tbody>
    <tr><td>"2022.05.19"</td><td>["A 6", "B 12", "C 3"]</td><td>["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]</td><td>[1, 3]</td></tr>
  </tbody>
</table>
