// sol1 map 사용
// function solution(strlist) {
//     return strlist.map(str => str.length);
// }
// sol2 for...of 사용
function solution(strlist) {
    const answer = [];
    for (let str of strlist) {
        answer.push(str.length);
    }
    return answer;
}