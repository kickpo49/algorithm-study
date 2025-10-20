function solution(n) {
    let answer = 2;
    
    for(let k = 1; k <= 1000; k++) {
    if(n === k * k) {
        answer = 1;
        }
    }
    return answer;
}