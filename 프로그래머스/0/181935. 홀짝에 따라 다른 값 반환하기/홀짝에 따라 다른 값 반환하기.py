# Python3
def solution(n):
    answer = 0
    if n % 2 == 0:  # n이 짝수
        for i in range(2, n+1, 2):  # 2부터 n까지 짝수만
            answer += i**2
    else:   # n이 홀수
        for i in range(1, n+1, 2):
            answer += i
    return answer

# range(start, stop, step)

# JavaScript
# function solution(n) {
#     let answer = 0;
#     if (n % 2 === 0) {  // n이 짝수
#         for (let i = 2; i <= n; i += 2) {
#             answer += i ** 2;  // 또는 i * i
#         }
#     } else {  // n이 홀수
#         for (let i = 1; i <= n; i += 2) {
#             answer += i;
#         }
#     }
#     return answer;
# }

# Java
# public class Solution {
#     public int solution(int n) {
#         int answer = 0;
#         if (n % 2 == 0) {  // n이 짝수
#             for (int i = 2; i <= n; i += 2) {
#                 answer += i * i;
#             }
#         } else {  // n이 홀수
#             for (int i = 1; i <= n; i += 2) {
#                 answer += i;
#             }
#         }
#         return answer;
#     }
# }