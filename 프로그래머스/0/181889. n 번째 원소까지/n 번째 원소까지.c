#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// num_list_len은 배열 num_list의 길이입니다.
int* solution(int num_list[], size_t num_list_len, int n) {
    // n개의 원소를 저장할 배열 동적 할당
    int* answer = (int*)malloc(n * sizeof(int)); // n개의 정수를 저장할 수 있는 배열을 할당
    
        // 첫 번째 원소부터 n번째 원소까지 복사
    for (int i = 0; i < n; i++) {
        answer[i] = num_list[i];
    }
    return answer;
}

// malloc = Memory Allocation (메모리 할당)

// int* ptr;         정수를 가리키는 포인터
// char* str;        문자를 가리키는 포인터
// double* dptr;     실수를 가리키는 포인터
// *는 포인터(pointer) 타입
// 포인터는 메모리 주소를 저장하는 변수