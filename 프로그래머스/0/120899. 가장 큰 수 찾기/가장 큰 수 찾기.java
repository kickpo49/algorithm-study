class Solution {
    public int[] solution(int[] array) {
        int[] answer = new int[2];  // 크기 2인 배열 생성
        
        int maxnum = array[0];     // array의 처음 값을 max값으로 지정
        int maxindex = 0;           // array의 처음 index값 지정
        
        // 처음부터 마지막까지 수 비교
        for (int i = 1; i < array.length; i++) {
            if (array[i] > maxnum) {
                maxnum = array[i];  // 최대값 변경
                maxindex = i;       // 인덱스 변경
            }
        }
        answer[0] = maxnum;
        answer[1] = maxindex;
        return answer;
    }
}