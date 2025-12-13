# Python3
def solution(array, n):
    count = 0
    for num in array:
        if num == n:
            count += 1
    return count

# def solution(array, n):
#     return array.count(n)

# JavaScript
# function solution(array, n) {
#     let count = 0;
#     for (let num of array) {
#         if (num === n) 
#             count++;
#     }
#     return count;
# }

# function solution(array, n) {
#     return array.filter(num => num === n).length;
# }

# class Solution {
#     public int solution(int[] array, int n) {
#         int count = 0;
#         for (int i = 0; i < array.length; i++) {
#             if (array[i] == n) {
#                 count++;
#             }
#         }
#         return count;
#     }
# }
