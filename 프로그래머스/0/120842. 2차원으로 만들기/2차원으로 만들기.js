// slice(i, i + n)으로 n개씩 잘라서 배열에 추가
// function solution(num_list, n) {
//     const answer = [];
//     for(let i = 0; i < num_list.length; i += n) {
//         answer.push(num_list.slice(i, i + n));
//     }
//     return answer;
// }

// Array.from 사용 > Array.from(arrayLike, mapFn)
// 필요한 행의 개수만큼 배열 생성
// function solution(num_list, n) {
//     return Array.from(
//         { length: Math.ceil(num_list.length / n) },
//         (_, i) => num_list.slice(i * n, i * n + n) 
//     );
// }
    // ### 2️⃣ **두 번째 인자: `(_, i) => num_list.slice(i * n, i * n + n)`**
    //  매핑 함수 (map 함수와 동일한 역할)
    //  `_`: 첫 번째 파라미터 (현재 요소값, 사용 안 함)
    //  `i`: 두 번째 파라미터 (인덱스: 0, 1, 2, 3...)

// array.reduce((accumulator, currentValue, index) => { }, initialValue)
function solution(num_list, n) {
    return num_list.reduce((acc, curr, i) => {
        if (i % n === 0) acc.push([]);
        acc[acc.length - 1].push(curr);
        return acc;
    }, []);
}