function solution(balls, share) {
    // nCr = n! / (r! × (n-r)!)
    // 최적화: n × (n-1) × ... × (n-r+1) / r!
    
    let answer = 1;
    
    // 분자와 분모를 동시에 계산하여 약분
    for(let i = 0; i < share; i++) {
        answer *= (balls - i);    // 분자: balls × (balls-1) × ... × (balls-share+1)
        answer /= (i + 1);         // 분모: 1 × 2 × ... × share
    }
    
    return answer;
}
// Math.round() 반올림 메소드 필요
// JavaScript는 숫자를 부동소수점(floating point) 방식으로 저장하는데, 나눗셈을 반복하면 미세한 오차가 누적
// function solution(balls, share) {
//     let answer = 0;
    
//     // balls! 계산
//     let n = 1;
//     let i = balls;
//     while(i >= 1) {
//         n *= i;
//         i--;
//     }
    
//     // share! 계산
//     let m = 1;
//     let j = share;
//     while(j >= 1) {
//         m *= j;
//         j--;
//     }
    
//     // (balls - share)! 계산
//     let k = 1;
//     let l = balls - share;
//     while(l >= 1) {
//         k *= l;
//         l--;
//     }
    
//     answer = n / (m * k);
    
//     return Math.round(answer);
// }
// sol2 팩토리얼 함수 생성
// function solution(balls, share) {
//     // 팩토리얼 계산 함수
//     function factorial(n) {
//         let result = 1;
//         for(let i = n; i >= 1; i--) {
//             result *= i;
//         }
//         return result;
//     }
    
//     let n = factorial(balls);
//     let m = factorial(share);
//     let k = factorial(balls - share);
    
//     let answer = n / (m * k);  // nCm = n! / (m! * (n-m)!)
    
//     return Math.round(answer);
// }
