# Python3
def solution(numbers):
    numbers.sort()
    
    # 가장 큰 두 수의 곱 = 양수 x 양수
    max1 = numbers[-1] * numbers[-2]
    
    # 가장 작은 두 수의 곱 = 음수 x 음수
    max2 = numbers[0] * numbers[1]
    
    return max(max1, max2)

# JavaScript
# function solution(numbers) {
#     numbers.sort((a, b) => a - b);  # 오름차순 정렬
    
#     // 경우 1: 가장 큰 두 수의 곱
#     const max1 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    
#     // 경우 2: 가장 작은 두 수의 곱 (음수 * 음수)
#     const max2 = numbers[0] * numbers[1];
    
#     return Math.max(max1, max2);
# }

# Java
# class Solution {
#     public int solution(int[] numbers) {
#         Arrays.sort(numbers);
        
#         int n = numbers.length;
        
#         // 경우 1: 가장 큰 두 수의 곱
#         int max1 = numbers[n-1] * numbers[n-2];
        
#         // 경우 2: 가장 작은 두 수의 곱 (음수 * 음수)
#         int max2 = numbers[0] * numbers[1];
        
#         return Math.max(max1, max2);
#     }
# }