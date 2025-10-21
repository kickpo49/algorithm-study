function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {  // n이 10인 경우 > i는 1,2,3,4,5,6,7,8,9,10
        let count = 0;
        for (let j = 1; j <= i; j++) { // j는 1부터 i까지
            if (i % j == 0) {
            count++;
            }
        }
        if (count >= 3) {
            answer++;
        }
    }
    return answer;
}