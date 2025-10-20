function solution(numbers, direction) {
    let answer = [...numbers]; // 원본 배열 복사
    for(let i = 0; i < numbers.length; i++) {
        if (direction == "right") {
            // i번째 원소를 (i+1) 위치에 넣기
            // 단, 마지막 원소는 0번째 위치에
            answer[(i + 1) % numbers.length] = numbers[i];
        }
        else if (direction == "left") {
            // i번째 원소를 (i-1) 위치에 넣기
            // 단, 0번째 원소는 마지막 위치에
            answer[(i - 1 + numbers.length) % numbers.length] = numbers[i];
        }
    }
    return answer;
}


// function solution(numbers, direction) {
//     let answer = [...numbers]; // 원본 배열 복사
    
//     if (direction === "right") {
//         let last = answer.pop();      // 마지막 요소 제거하고 저장
//         answer.unshift(last);         // 맨 앞에 추가
//     }
//     else if (direction === "left") {
//         let first = answer.shift();   // 첫 번째 요소 제거하고 저장
//         answer.push(first);           // 맨 뒤에 추가
//     }
    
//     return answer;
// }