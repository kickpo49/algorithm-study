# Python3
def solution(num_list):
    if num_list[-1] > num_list[-2]:
        num_list.append(num_list[-1] - num_list[-2])
    else:
        num_list.append(num_list[-1] * 2)
    return num_list

# JavaScript
# function solution(num_list) {
#     const last = num_list[num_list.length - 1];
#     const prev = num_list[num_list.length - 2];
    
#     if (last > prev) {
#         num_list.push(last - prev);
#     } else {
#         num_list.push(last * 2);
#     }
#     return num_list;
# }

# Java
# class Solution {
#     public int[] solution(int[] num_list) {
#         int last = num_list[num_list.length - 1];
#         int prev = num_list[num_list.length - 2];
        
#         int[] result = new int[num_list.length + 1];
        
#         for (int i = 0; i < num_list.length; i++) {
#             result[i] = num_list[i];
#         }
        
#         if (last > prev) {
#             result[num_list.length] = last - prev;
#         }
#         else {
#             result[num_list.length] = last * 2;
#         }
        
#         return result;
#     }
# }