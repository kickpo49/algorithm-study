// map 사용
// Array.prototype.map 은 배열의 각 요소를 순회하면서, 콜백 함수를 실행하고 그 결과로 새로운 배열을 만들어 줍니다.

//  array.map(function(element, index, array) {
//  element : 현재 처리 중인 배열의 요소
//  index   : 현재 요소의 인덱스
//  array   : 원본 배열
//  })

const solution = (numbers) => numbers.map(num => num * 2); 
//map이 numbers 배열의 원소를 하나씩 꺼내서 num에 넣고, num * 2를 실행


// for문 사용
const solution1 = (numbers) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2); // .push() 는 JavaScript 배열(Array)의 메서드
                                // 배열의 맨 뒤(끝) 에 새로운 요소를 추가하는 함수
  }
  return result;
};
