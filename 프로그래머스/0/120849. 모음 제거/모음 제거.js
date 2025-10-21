// function solution(my_string) {
//   // 정규식을 사용해 a, e, i, o, u (대소문자 포함) 제거
//   return my_string.replace(/[aeiou]/gi, '');    // g 전역 검색 i 대소문자 구분 없이 검색
// }

function solution(my_string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return my_string
    .split('')                    // 문자열 → 문자 배열
    .filter(alpha => !vowels.includes(alpha)) // 모음이 아닌 문자만 남김
    .join('');                    // 다시 문자열로 합침
}