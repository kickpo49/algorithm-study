function solution(n) {
    let answer = 0;
    let k = 1;
    for (let i = 1; i <= 10; i++) {
        k *= i;
        if (k > n) {
            answer = i - 1;
            return answer;     
        }
    }
    return 10;
}