function solution(numbers) {
    let sum = numbers.reduce((acc, cur) => {
    return acc + cur;
    });
    let mean = sum / numbers.length;    

    return mean;
}

// 배열의 모든 원소 더하기
// Array.prototype.reduce() 메서드
// arr.reduce(callback[, initialValue])
// callback	배열의 각 요소에 대해 실행할 함수. 4개의 인수를 가집니다:
// 1. accumulator (누산기): 이전 콜백 함수의 반환 값. 또는, initialValue가 제공된 경우 첫 번째 호출에서는 그 값입니다.
// 2. currentValue (현재 값): 처리할 현재 배열 요소의 값입니다.
// 3. currentIndex (현재 인덱스): 처리할 현재 배열 요소의 인덱스입니다.
// 4. array (원본 배열): reduce를 호출한 배열 자체입니다.



// 배열의 원소 개수 만큼 나누기
// 배열의 길이를 나타내는 Array.prototype.length 속성