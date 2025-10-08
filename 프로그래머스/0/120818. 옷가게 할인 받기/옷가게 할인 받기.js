// 1. 테스트 13, 14 실패 코드
// function solution(price) {
//     if(price >= 100000 && price < 300000) {
//         return price - (price * 0.05)
//     }
//     else if(price >= 300000 && price < 500000) {
//         return price - (price * 0.1)
//     }
//     else if(price >= 500000) {
//         return price - (price * 0.2)
//     }
//     else {
//         return price;
//     }
// }

// 제한사항의 소수점 이하를 버린 정수를 return하라고 했기 때문에 실패한 케이스가 생긴 것으로 추측
// sol1) Math.floor 혹은 Math.trunc 로 소수점을 내림 혹은 버린다.
function solution(price) {
    if(price >= 100000 && price < 300000) {
        return Math.trunc(price - (price * 0.05));
    }
    else if(price >= 300000 && price < 500000) {
        return Math.trunc(price - (price * 0.1));
    }
    else if(price >= 500000) {
        return Math.trunc(price - (price * 0.2));
    }
    else {
        return price;
    }
}