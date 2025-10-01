    // 최대공약수 구하기 (유클리드 호제법)
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const solution = (numer1, denom1, numer2, denom2) => {
    let top = numer1 * denom2 + numer2 * denom1;   // 분자
    let bottom = denom1 * denom2;                  // 분모
    let d = gcd(top, bottom);                      // 최대공약수 greatest common divisor

    return [top / d, bottom / d];
};

// 공통 분모 만들기

// 분자와 분모의 최대공약수로 나누기
// const gcd = (a, b) => {
//   if (b === 0) {
//     return a;               // b가 0이면 a가 최대공약수
//   } else {
//     return gcd(b, a % b);   // b가 0이 아닐 때 → 재귀 호출
//   }
// };