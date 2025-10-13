// 핵심 개념:
// 순서쌍 (a, b)에서 a × b = n
// a가 약수면 b = n/a도 자동으로 약수
// √n까지만 확인하면 모든 약수 쌍을 찾을 수 있음
// 완전제곱수(예: 100 = 10×10)일 때는 중복 카운트 방지

function solution(n) {
    let count = 0;
    // 1부터 √n까지만 확인 (더 효율적)
    for (let i = 1; i <= Math.sqrt(n); i++) {
        // i가 n의 약수인지 확인
        if (n % i === 0) {
            count += 1;  // i를 첫 번째 수로 하는 순서쌍 (i, n/i) 카운트
            // i와 n/i가 다른 경우에만 n/i를 첫 번째 수로 하는 순서쌍도 카운트
            // 예: n=20, i=4일 때 → (4,5)와 (5,4) 모두 카운트
            // 예: n=100, i=10일 때 → (10,10)은 한 번만 카운트 (중복 방지)
            if (i !== n / i) {
                count += 1;  // (n/i, i) 순서쌍 카운트
            }
        }
    }
    return count;
}


// function solution(n) {
//     let count = 0;
//     for(let i = 0; i <= n; i++) {
//         for(let j = 0; j <= n; j++)
//             if(n === i * j) {
//             count++;
//             }
//     }
//     return count;
// }