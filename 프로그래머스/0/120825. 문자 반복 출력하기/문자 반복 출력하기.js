function solution(my_string, n) {
    return my_string
        .split('') // 1. 문자열을 문자 하나하나를 요소로 하는 배열로 변환
        .map(char => char.repeat(n)) // 2. 각 문자(char)를 n번 반복한 새 문자열로 변환
        .join(''); // 3. 배열의 모든 요소를 하나의 문자열로 합침
}
//     // 반복문과 repeat() 메소드 사용
    
//     // 빈 문자열 저장 변수
//     let answer1 = '';
    
//         // 2. my_string의 각 문자(char)를 순서대로 반복합니다.
//        for (const char of my_string) {
//         // 3. 현재 문자(char)를 n번 반복합니다.
//         const repeatedChar = char.repeat(n);
        
//         // 4. 반복된 문자열을 answer에 이어 붙입니다.
//         answer1 += repeatedChar;
//     }
//     // 5. 완성된 문자열을 반환합니다.
//     return answer1;
