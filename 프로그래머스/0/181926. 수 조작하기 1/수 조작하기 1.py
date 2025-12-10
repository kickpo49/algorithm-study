# Python3
def solution(n, control):
    values = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10
    }
    for x in control:
        n += values[x]
    return n

# // ===== JavaScript 버전 =====
# function solution(n, control) {
#     // 각 문자에 따른 변화량 매핑
#     const changes = {
#         'w': 1,
#         's': -1,
#         'd': 10,
#         'a': -10
#     };
    
#     // control 문자열의 각 문자에 따라 n 업데이트
#     for (let c of control) {
#         n += changes[c];
#     }
    
#     return n;
# }

# // ===== Java 버전 =====
# class Solution {
#     public int solution(int n, String control) {
#         // control 문자열의 각 문자에 따라 n 업데이트
#         for (char c : control.toCharArray()) {
#             switch (c) {
#                 case 'w':
#                     n += 1;
#                     break;
#                 case 's':
#                     n -= 1;
#                     break;
#                 case 'd':
#                     n += 10;
#                     break;
#                 case 'a':
#                     n -= 10;
#                     break;
#             }
#         }
        
#         return n;
#     }