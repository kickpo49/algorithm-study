// 접근 방법 1: 문자열 변환
// String(n) - 숫자를 문자열로 변환 (예: 1234 → "1234")
// .split('') - 각 문자를 배열로 분리 (예: ["1", "2", "3", "4"])
// .reduce() - 각 문자를 숫자로 변환하며 누적 합산
// function solution(n) {
//         return String(n).split('').reduce((sum, current) => sum + Number(current), 0);
// }

// 접근 방법 2: 수학적 방법
function solution(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;  // 일의 자리 숫자를 더함
        n = Math.floor(n / 10);  // 마지막 자리 제거
    }
    return sum;
}