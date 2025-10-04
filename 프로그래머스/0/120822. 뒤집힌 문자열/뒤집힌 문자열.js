function solution(my_string) {
    let reversed = "";
    for (let i = my_string.length - 1; i >= 0; i--) { // my_string.length - 1 마지막 글자 인덱스
        reversed += my_string[i];
    }
    return reversed;
}


// function solution(my_string) {
//     return my_string.split("").reverse().join("");
// }
// split("") → 문자열을 한 글자씩 잘라 배열로 만듭니다.
// 예: "hello" → ["h", "e", "l", "l", "o"]

// reverse() → 배열을 거꾸로 뒤집습니다.
// 예: ["h", "e", "l", "l", "o"] → ["o", "l", "l", "e", "h"]

// join("") → 배열을 다시 문자열로 합칩니다.
// 예: ["o", "l", "l", "e", "h"] → "olleh"