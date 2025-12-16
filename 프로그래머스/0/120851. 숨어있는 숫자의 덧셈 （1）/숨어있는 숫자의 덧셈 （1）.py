# Python3
def solution(my_string):
    answer = 0
    for char in my_string:
        if char.isdigit():
            answer += int(char)
    return answer

# JavaScript
# function solution(my_string) {
#     let answer = 0;
    
#     for (let char of my_string) {
#         if (char >= '0' && char <= '9') {
#             answer += Number(char);
#         }
#     }
#     return answer;
# }

# Java
# class Solution {
#     public int solution(String my_string) {
#         int answer = 0;
        
#         for (char c : my_string.toCharArray()) {
#             if (Character.isDigit(c)) {
#                 answer += c - '0'   
#                 # c - '0'로 문자를 숫자로 변환 (ASCII 값 차이 이용)
#             }
#         }
#         return answer;
#     }
# }