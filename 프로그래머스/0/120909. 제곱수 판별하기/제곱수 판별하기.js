function solution(n) {
    let answer = 2;
    
    for(let k = 1; k <= 1000; k++) {
    if(n === k * k) {
        answer = 1;
        }
    }
    return answer;
}

function solution(n) {
    // n의 제곱근을 구함
    const sqrt = Math.sqrt(n);
    
    // 제곱근이 정수인지 확인
    // Math.floor(sqrt) === sqrt 또는 Number.isInteger(sqrt)로도 확인 가능
    if (Number.isInteger(sqrt)) {
        return 1;  // 제곱수인 경우
    } else {
        return 2;  // 제곱수가 아닌 경우
    }
}
