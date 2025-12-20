# Python3 내 코드
def solution(start_num, end_num):
    answer = []
    for i in range(start_num, end_num + 1):
        answer.append(i)
    return answer

# Python3 추천 코드
# def solution(start_num, end_num):
#     return list(range(start_num, end_num + 1))

# JavaScript
# function solution(start_num, end_num) {
#   var answer = [];
#   for (let i = start_num; i <= end_num; i++) {
#     result.push(i);
#   }
#   return result;
# }

# Java
# class Solution {
#     public int[] solution(int start_num, int end_num) {
#         int size = end_num - start_num + 1;
#         int[] answer = new int[size];
        
#         for (int i = 0; i < size; i++) {
#             answer[i] = start_num + i;
#         }
        
#         return answer;
#     }
# }