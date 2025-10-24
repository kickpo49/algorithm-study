def solution(num_list): # 함수 정의
    product = 1 # 곱 초기값
    sum = 0     # 합 초기값
    for num in num_list:    # 리스트 원소 하나씩 꺼내서 반복
        product *= num      # 모든 원소 곱
        sum += num          # 모든 원소 합
        
    sum2 = sum ** 2         # 모든 원소 합의 제곱
    
    if product < sum2:      # 곱의 합이 제곱보다 작은 경우
        return 1            # 작으면 1
    else:
        return 0            # 크면 0