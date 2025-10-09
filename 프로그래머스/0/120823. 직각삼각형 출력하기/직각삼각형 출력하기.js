// Node.js의 내장 모듈인 **readline**
// 이 모듈은 **터미널(콘솔)**에서 사용자 입력을 한 줄씩 읽을 수 있게 해준다.

const readline = require('readline');
const rl = readline.createInterface({   // readline.createInterface()를 사용해서 입력/출력 스트림을 지정
    input: process.stdin,   // 콘솔에서 입력받음
    output: process.stdout  // 콘솔에 출력함
});

let input = [];


rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
     const n = Number(input[0]);  // 입력받은 값을 숫자로 변환

    // 높이와 너비가 n인 직각 이등변 삼각형 출력
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
});