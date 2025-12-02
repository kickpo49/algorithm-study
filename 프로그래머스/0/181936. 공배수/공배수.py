def solution(number, n, m):
    if number % n == 0 and number % m == 0:
        return 1
    else:
        return 0
    
# # 더 간결한 버전 (삼항 연산자 사용)
# def solution_v2(number, n, m):
#     return 1 if number % n == 0 and number % m == 0 else 0