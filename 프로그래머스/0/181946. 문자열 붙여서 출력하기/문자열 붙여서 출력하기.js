const readline = require('readline');   // Node.js 내장 모듈인 readline - 콘솔에서 입력을 한 줄씩 읽기 위한 기능
const rl = readline.createInterface({
    input: process.stdin,   // 사용자 키보드 입력 받음
    output: process.stdout  // 콘솔에 출력
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');    // 공백 기준으로 문자열을 나눠 배열로 생성
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    // console.log(String(str1)+String(str2));
    console.log(str1 + str2);
    
});
// 입력 apple banana
// input = ['apple', 'banana']
// str1 = 'apple'
// str2 = 'banana'
