function solution(array, height) {
    let count = 0;  // 키 큰 사람 수
    let i = 0;  // 인덱스
    let answer = array.sort((a, b) => b - a) // b - a 는 내림차순 정렬 즉, 큰 값이 제일 앞에 위치
    while(answer[i] > height) {         //  while (i < answer.length && answer[i] > height)
        count++;
        i++;
    }
    return count;
}

// for문 사용
// for (let i = 0; i < answer.length; i++) {
//         if (answer[i] > height) count++;
//         else break; // 이미 내림차순이라 더 볼 필요 없음
//     }