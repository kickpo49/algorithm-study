# Python3
def solution(a, b):
    concatab = int(str(a) + str(b))
    
    multiply = 2 * a * b
    
    if concatab >= multiply:
        return concatab
    else:
        return multiply
    
# JavaScript
# function solution(a, b) {
#     // a ⊕ b: 두 수를 붙여서 쓴 값
#     const concatValue = parseInt(String(a) + String(b));
    
#     // 2 * a * b
#     const multiplyValue = 2 * a * b;
    
#     // 더 큰 값 반환 (같으면 concatValue 반환)
#     return concatValue >= multiplyValue ? concatValue : multiplyValue;
# }

# Java
# class Solution {
#     public int solution(int a, int b) {
#         // a ⊕ b: 두 수를 붙여서 쓴 값
#         int concatValue = Integer.parseInt(String.valueOf(a) + String.valueOf(b));
        
#         // 2 * a * b
#         int multiplyValue = 2 * a * b;
        
#         // 더 큰 값 반환 (같으면 concatValue 반환)
#         return concatValue >= multiplyValue ? concatValue : multiplyValue;
#     }