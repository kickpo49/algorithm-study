def solution(a, b, flag):
    answer = 0
    if flag == True:    # true → True: Python에서 불리언 값은 첫 글자가 대문자입니다.
        answer = a + b
    else:
        answer = a - b
    return answer

# # 또는 더 간결하게:
# def solution_v2(a, b, flag):
#     if flag:  # 수정 2: == True 생략 가능
#         answer = a + b
#     else:
#         answer = a - b
#     return answer

# # 또는 삼항 연산자 사용:
# def solution_v3(a, b, flag):
#     return a + b if flag else a - b
# ### 📖 읽는 방법
# "**a + b를 반환해**, **만약 flag가 참이면**, **아니면 a - b를 반환해**"
