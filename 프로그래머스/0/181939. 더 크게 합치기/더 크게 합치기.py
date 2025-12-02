def solution(a, b):
    # a ⊕ b: a와 b를 문자열로 붙인 후 정수로 변환
    ab = int(str(a) + str(b))
    
    # b ⊕ a: b와 a를 문자열로 붙인 후 정수로 변환
    ba = int(str(b) + str(a))
    
    # 더 큰 값을 반환 (같으면 a ⊕ b 반환)
    return max(ab, ba)
