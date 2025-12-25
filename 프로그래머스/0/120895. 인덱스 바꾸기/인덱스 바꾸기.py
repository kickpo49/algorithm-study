def solution(my_string, num1, num2):
    # 문자열은 immutable > 리스트로 변환
    str_list = list(my_string)
    
    # 두 인덱스 문자 교환
    str_list[num1], str_list[num2] = str_list[num2], str_list[num1]
    
    return ''.join(str_list)