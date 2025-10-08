function solution(money) {
    let coffee = Math.trunc(money / 5500); // 커피 산 개수
    let change = money % 5500; // 커피 산 나머지 잔돈
    var answer = [coffee, change];
    return answer;
}