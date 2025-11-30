def solution(my_string, n):
    answer = my_string[-n:]
    return answer

# my_string[-n:]: 문자열의 뒤에서부터 n개의 문자를 슬라이싱합니다
# 음수 인덱스 -n은 뒤에서 n번째 위치를 의미하고, :를 사용하여 그 위치부터 끝까지 가져옵니다