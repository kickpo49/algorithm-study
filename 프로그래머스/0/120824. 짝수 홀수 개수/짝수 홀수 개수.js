function solution(num_list) {
    let even_count = 0;     // 짝수 개수 초기값
    let odd_count = 0;      // 홀수 개수 초기값
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            even_count++;
        }
        else {
            odd_count++;
        }
    }
    return [even_count, odd_count];
}