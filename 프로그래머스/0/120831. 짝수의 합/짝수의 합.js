const solution = (n) => {
  const m = Math.trunc(n / 2); // n 이하 짝수의 개수
  return m * (m + 1);
};
// n이 짝수인 경우와 홀수인 경우를 생각 > n이 홀수인 경우 바로 직전 값을 사용하고 싶음
// Math.floor 나 Math.trunc로 소수점을 버리기