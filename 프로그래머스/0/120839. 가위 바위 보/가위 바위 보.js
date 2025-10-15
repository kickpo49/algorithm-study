// sol1) if문 조건문 사용
// function solution(rsp) {
//     let win = ""; // 빈 문자열 변수
//     for(let i = 0; i < rsp.length; i++) {
//         if(rsp[i] == "2") {
//             win += "0"; // 가위인 경우 바위로
//         }
//         else if(rsp[i] == "5") {
//             win += "2"; // 보인 경우 가위로
//         }
//         else if(rsp[i] == "0") {
//             win += "5"; // 바위인 경우 보로
//         }
//     } return win;
// }

// sol2) 딕셔너리(객체)로 매핑 관계 만들기
// function solution(rsp) {
//     let answer = "";
    
//     // 이기는 관계를 객체로 정의
//     const win = {
//         "2": "0",  // 가위(2)는 바위(0)가 이김
//         "0": "5",  // 바위(0)는 보(5)가 이김
//         "5": "2"   // 보(5)는 가위(2)가 이김
//     };
    
//     // rsp의 각 문자를 확인하면서 이기는 값으로 변환
//     for(let i = 0; i < rsp.length; i++) {
//         answer += win[rsp[i]];
//     }
    
//     return answer;
// }


// sol3) replace() 메서드 활용 ** 임시 문자 사용 필수
function solution(rsp) {
    let answer = rsp;
    
    // 임시 문자로 먼저 변환 (충돌 방지)
    answer = answer.replace(/2/g, "a");  // 가위 → 임시 a
    answer = answer.replace(/0/g, "b");  // 바위 → 임시 b
    answer = answer.replace(/5/g, "c");  // 보 → 임시 c
    
    // 임시 문자를 이기는 값으로 변환
    answer = answer.replace(/a/g, "0");  // 가위를 이기는 바위
    answer = answer.replace(/b/g, "5");  // 바위를 이기는 보
    answer = answer.replace(/c/g, "2");  // 보를 이기는 가위
    
    return answer;
}