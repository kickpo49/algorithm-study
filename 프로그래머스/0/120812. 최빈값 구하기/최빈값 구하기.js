function solution(array) {
    const count = {}; // {} 의미는 빈 객체를 저장한다는 의미이며 각 숫자의 빈도를 count라는 변수에 저장
    let maxCount = 0; // maxCount는 최대빈도 값을 저장하는 변수, 현재 최대빈도를 저장
    let mode = -1; // 최빈값
    
    // 빈도 계산
    for(let num of array) {                 // for...of: 배열의 "값"을 순회 (인덱스가 아니라 값 자체가 들어옴)
        count[num] = (count[num] || 0) + 1; // 자바스크립트의 ||(OR) 연산자는 왼쪽이 falsy 값이면 오른쪽 값을 사용
                                            // falsy 값에는 undefined, null, 0, false, ''(빈문자열) 등이 있다
        if (count[num] > maxCount) {
            maxCount = count[num];
            mode = num;
        }
    }
    // 최빈값이 여러 개 있는지 확인
    // maxCount와 같은 빈도를 가진 값들을 모두 수집
    let modes = [];         // modes라는 변수에 빈 배열
    for (let num in count) {            // for...in: 객체의 "키"를 순회 (여기서 키는 문자열이므로 Number로 복원)
        if (count[num] === maxCount) {
            modes.push(Number(num));    // 객체 키는 문자열이므로 숫자로 변환해 보관
        }
    }

    return modes.length > 1 ? -1 : mode; // 최댓빈도 값이 2 이상인 경우 -1 return, 아닌 경우 mode(최빈값) return
}