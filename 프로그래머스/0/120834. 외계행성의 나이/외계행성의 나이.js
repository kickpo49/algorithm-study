function solution(age) {
  // 숫자를 문자열로 바꾼 뒤, 각 숫자를 알파벳으로 치환
  // 0→a, 1→b, 2→c, ..., 9→j
  return String(age).replace(/\d/g, d => 'abcdefghij'[d]); // 'abcdefghij'[d]: 문자열 인덱싱
    // replace(): 문자열에서 특정 패턴을 찾아서 바꾸는 함수
    // /\d/g: 정규표현식 (Regular Expression)
    // \d: 숫자 한 개를 의미 (0~9)
    // g: global의 약자, 모든 숫자를 찾아서 바꾼다는 뜻
}