// function solution(str1, str2) {
//     let answer = 0;
//     answer = str1.includes(str2) ? 1 : 2;
//     return answer;
// }

function solution(str1, str2) {
    let answer = 2;
    
    for(let i = 0; i <= str1.length - str2.length; i++) {
        let isMatch = true; // 일치 여부 플래그
        
        // str2의 각 문자와 비교
        for(let j = 0; j < str2.length; j++) {
            if(str1[i + j] !== str2[j]) {
                isMatch = false;
                break;
            }
        }
        
        if(isMatch) {
            answer = 1;
            break;
        }
    }
    
    return answer;
}

// 문자열 포함 여부 확인 방법

// JavaScript에는 문자열 안에 특정 문자열이 포함되어 있는지 확인하는 내장 메서드가 있습니다
// includes() 메서드를 사용하면 간단하게 해결할 수 있어요


// includes() 메서드

// 문자열.includes(찾을문자열) 형태로 사용
// 포함되어 있으면 true, 없으면 false를 반환합니다


// 조건문 활용

// includes()의 결과가 true면 1을 return
// false면 2를 return


// 삼항 연산자 사용 가능

// 조건 ? 참일때값 : 거짓일때값 형태로 간결하게 작성 가능