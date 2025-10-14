// function solution(hp) {
//     let general = Math.floor(hp / 5);  // 장군개미로 최대한 처리
//     hp = hp % 5;                        // 남은 체력
    
//     let soldier = Math.floor(hp / 3);  // 병정개미로 남은 체력 처리
//     hp = hp % 3;                        // 남은 체력
    
//     let worker = hp;                    // 일개미로 나머지 처리
    
//     const answer = general + soldier + worker;
//     return answer;
// }

function solution(hp) {
    const attacks = [5, 3, 1];  // 장군개미, 병정개미, 일개미 공격력
    let answer = 0;
    
    for (let i = 0; i < attacks.length; i++) {
        answer += Math.floor(hp / attacks[i]);  // 현재 공격력으로 처리 가능한 개미 수
        hp = hp % attacks[i];                    // 남은 체력
    }
    
    return answer;
}