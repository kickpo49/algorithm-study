// class Solution {
//     public int solution(int num, int k) {
//         String numstr = String.valueof(num);    // 숫자 > 문자열로 변환
        
//         // 문자열 각 문자 순회
//         for (int i = 0; i < numstr.length(); i++) {
//             if (numstr.charAt(i) - '0' == k) { // - '0'은 문자를 숫자로 변환하는 방법
//                 return i + 1;
//             }
//         return -1;
//     }
// }
    
    class Solution {
    public int solution(int num, int k) {
        // 1단계: 숫자들을 문자열로 변환
        String numStr = String.valueOf(num);  // 29183 → "29183"
        String kStr = String.valueOf(k);      // 1 → "1"
        
        // 2단계: indexOf로 k가 처음 나타나는 위치 찾기
        int index = numStr.indexOf(kStr);
        // "29183".indexOf("1") → 2 (인덱스 2에서 발견)
        // "29183".indexOf("7") → -1 (찾지 못함)
        
        // 3단계: 결과 반환
        return index >= 0 ? index + 1 : -1;
        // 못 찾았으면 -1, 찾았으면 자리수(인덱스+1) 반환
    }
}