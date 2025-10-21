// const newArray = array.filter(element => 조건);
function solution(my_string) {
    let answer = [];
    answer = my_string.split('')
                      .filter(char => !isNaN(char))
                      .map(Number)  // 문자를 숫자로 변환
                      .sort((a, b) => a - b);
    return answer;
}