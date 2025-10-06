function solution(n) {
    let k = [];
    
    for(let i =0; i < n/2; i++) {   // let i = 1; i <= n; i += 2 도 가능
        k.push(2*i + 1); // 홀수 생성
    }
    return k;
}