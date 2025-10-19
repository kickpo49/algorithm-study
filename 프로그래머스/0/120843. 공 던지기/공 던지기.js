function solution(numbers, k) {
    let curindex = 0;
    
    for (let i = 0; i < k -1; i++) {
        curindex = (curindex + 2) % numbers.length;
    }
    
    return numbers[curindex];
}

// 힌트 2: 원형 구조 처리
// 배열의 끝에 도달하면 다시 처음으로 돌아와야 합니다. 이를 위해 **나머지 연산자 %**를 사용하면 됩니다.