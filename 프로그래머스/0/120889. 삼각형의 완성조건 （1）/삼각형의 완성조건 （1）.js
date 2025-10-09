function solution(sides) {
    let answer = sides.sort((a, b) => a - b);   // 오름차순 정렬
    if(answer[2] < answer[1] + answer[0]) {     // 가장 큰 변 길이는 answer[2] 이며 가장 작은 변 길이는 answer[0]
        return 1;
    }
    else {
    return 2;
    }
}