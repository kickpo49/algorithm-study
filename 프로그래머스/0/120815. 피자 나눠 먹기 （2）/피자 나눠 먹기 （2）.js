function solution(n) {
  // 최대공약수
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
// if문으로 하면
//     if (b === 0) {
//   return a;
// } else {
//   return gcd(b, a % b);
// }

    
    
  // 최소 피자 판 수
  return n / gcd(n, 6);
}
