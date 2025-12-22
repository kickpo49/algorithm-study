# Python3 추천 코드
# def solution(my_string):
#     return my_string.swapcase()

# Python3 반복문 사용
def solution(my_string):
    result = ""
    for char in my_string:
        if char.isupper():  # 대문자 확인
            result += char.lower()  # 소문자로 변경
        else:
            result += char.upper()  # 대문자로 변경
    return result

# JavaScript 반복문 사용
# function solution(my_string) {
#     let result = "";
#     for (let char of my_string) {
#         if (char === char.toUpperCase()) {
#             result += char.toLowerCase();
#         }
#         else {
#             result += char.toUpperCase();
#         }
#     }
#     return result;
# }

# JavaScript map 사용
# function solution(my_string) {
#     return my_string.split('').map(char => 
#         char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
#     ).join('');
# }

# Java
# class Solution {
#     public String solution(String my_string) {
#         String answer = "";
#         for (int i = 0; i < my_string.length(); i++) {
#             char c = my_string.charAt(i);
#             if (Character.isUpperCase(c)) {
#                 answer += Character.toLowerCase(c);
#             }
#             else {
#                 answer += Character.toUpperCase(c);
#             }
#         }
#         return answer;
#     }
# }