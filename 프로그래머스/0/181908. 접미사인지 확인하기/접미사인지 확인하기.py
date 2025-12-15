# Python3
def solution(my_string, is_suffix):
    # return 1 if my_string.endswith(is_suffix) else 0
    return 1 if my_string[-len(is_suffix):] == is_suffix else 0


# JavaScript
# function solution(my_string, is_suffix) {
#     return my_string.endsWith(is_suffix) ? 1 : 0;
# }
# JavaScript의 endsWith() 메서드를 사용

# Java
# class Solution {
#     public int solution(String my_string, String is_suffix) {
#         return my_string.endsWith(is_suffix) ? 1 : 0;
#     }
# }