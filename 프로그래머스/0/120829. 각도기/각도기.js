function solution(angle) {
    var answer = 0;
    if (angle > 0 && angle < 90) {
        answer = 1;
    } else if (angle == 90) {
        answer = 2;
    } else if (angle > 90 && angle < 180) {
        answer = 3;
    } else if (angle == 180) {
        answer = 4;
    }
    return answer;
}


// other solution 1
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}

// other solution 2
function solution(angle) {
    if (angle > 0 && angle < 90) return 1;
    if (angle === 90) return 2;
    if (angle > 90 && angle < 180) return 3;
    if (angle === 180) return 4;
    return 0;
}

// other solution 3
function solution(angle) {
  return angle < 90 ? 1 :
         angle === 90 ? 2 :
         angle < 180 ? 3 :
         angle === 180 ? 4 : 0;
}

// 조건부 연산자 ? 설명
// 조건1 ? 값1 : 조건2 ? 값2 : 조건3 ? 값3 : 기본값;
