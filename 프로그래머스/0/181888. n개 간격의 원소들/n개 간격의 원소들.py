
# Python3
# def solution(num_list, n):
#     return num_list[::n]
# num_list[::n] [시작:끝:간격] 형식


def solution(num_list, n):
    result = []
    for i in range(0, len(num_list), n):
        # range(0, len(num_list), n): 0부터 리스트 길이까지 n씩 증가하는 인덱스를 생성
        result.append(num_list[i])
    return result

# JavaScript
# function solution(num_list, n) {
#     const result = [];
#     for (let i = 0; i < num_list.length; i += n) {
#         result.push(num_list[i]);
#     }
#     return result;
# }

# Java
# class Solution {
#     public int[] solution(int[] num_list, int n) {
#         int size = (num_list.length + n - 1) / n;     # 결과 배열 크기를 미리 계산
#         int[] result = new int[size];
#         int index = 0;
        
#         for (int i = 0; i < num_list.length; i += n) {
#             result[index++] = num_list[i];
#         }
        
#         return result;
#     }
# }