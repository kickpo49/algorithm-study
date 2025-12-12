# Python3
def solution(num_list):
    odd_str = ''.join(str(num) for num in num_list if num % 2 == 1)
    even_str = ''.join(str(num) for num in num_list if num % 2 == 0)
    
    odd_num = int(odd_str) if odd_str else 0
    even_num = int(even_str) if even_str else 0
    
    return odd_num + even_num

# JavaScript
# function solution(num_list) {
#     // 홀수만 문자열로 이어 붙이기
#     const odd_str = num_list
#                             .filter(num => num % 2 === 1)
#                             .join('');
    
#     // 짝수만 문자열로 이어 붙이기
#     const even_str = num_list
#                              .filter(num => num % 2 === 0)
#                              .join('');
    
#     // 문자열을 정수로 변환하여 합 계산
#     // 빈 문자열인 경우 0으로 처리
#     const odd_num = odd_str ? parseInt(odd_str) : 0;
#     const even_num = even_str ? parseInt(even_str) : 0;
    
#     return odd_num + even_num;
# }

# Java
# class Solution {
#     public int solution(int[] num_list) {
#         StringBuilder oddStr = new StringBuilder();
#         StringBuilder evenStr = new StringBuilder();
        
#         // 홀수와 짝수를 각각 문자열로 이어 붙이기
#         for (int num : num_list) {
#             if (num % 2 == 1) {
#                 oddStr.append(num);
#             } else {
#                 evenStr.append(num);
#             }
#         }
        
#         // 문자열을 정수로 변환하여 합 계산
#         // 빈 문자열인 경우 0으로 처리
#         int oddNum = oddStr.length() > 0 ? Integer.parseInt(oddStr.toString()) : 0;
#         int evenNum = evenStr.length() > 0 ? Integer.parseInt(evenStr.toString()) : 0;
        
#         return oddNum + evenNum;
#     }
# }
