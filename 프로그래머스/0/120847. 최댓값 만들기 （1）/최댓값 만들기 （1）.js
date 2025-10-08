function solution(numbers) {
    const numlength = numbers.length;
    numbers.sort((a, b) => a - b); // numbers 배열을 오름차순으로 정렬
    let answer = numbers[numlength-1] * numbers[numlength-2]; // 가장 큰 수 * 두 번째 큰 수
    return answer;
}

// 1. 오름차순으로 정렬
// 정렬 접근의 핵심 한 줄들만
// numbers.sort((a, b) => a - b);
// a - b < 0 음수면 a가 앞에
// a - b > 0 양수면 b가 앞에
// a - b = 0 이면 순서 유지
