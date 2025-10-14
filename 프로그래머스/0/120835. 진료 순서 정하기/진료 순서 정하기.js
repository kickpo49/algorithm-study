function solution(emergency) {
    // 값과 인덱스를 함께 저장
    // 배열.map((요소, 인덱스) => 변환값)
    const indexed = emergency.map((val, idx) => ({ val, idx }));
    // Testcase1 [3, 76, 24] → [{val: 3, idx: 0}, {val: 76, idx: 1}, {val: 24, idx: 2}]
    
    // 응급도를 기준으로 내림차순 정렬
    indexed.sort((a, b) => b.val - a.val);
    
    // 진료 순서 배열 초기화하기 위해 진료 순서를 저장할 배열 생성
    // new Array(길이)는 지정된 길이의 빈 배열을 만듭니다
    const answer = new Array(emergency.length);
    
    // 진료 순서 매기기 (응급도가 높을수록 1번부터)
    // 배열.forEach((요소, 인덱스) => { 실행코드 })
    indexed.forEach((item, order) => {
        // 반복 1: item = { val: 76, idx: 1 }, order = 0
        // 반복 2: item = { val: 24, idx: 2 }, order = 1
        // 반복 3: item = { val: 3, idx: 0 }, order = 2
        answer[item.idx] = order + 1;
        // answer[1] = 1, answer[2] = 2, answer[0] = 3
    });
    
    return answer;
}