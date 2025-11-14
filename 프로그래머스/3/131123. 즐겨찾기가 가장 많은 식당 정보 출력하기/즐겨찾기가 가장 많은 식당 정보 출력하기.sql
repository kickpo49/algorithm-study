-- 코드를 입력하세요
SELECT FOOD_TYPE, REST_ID, REST_NAME, FAVORITES
FROM (
    SELECT 
        FOOD_TYPE,
        REST_ID,
        REST_NAME,
        FAVORITES,
        RANK() OVER (PARTITION BY FOOD_TYPE ORDER BY FAVORITES DESC) AS rn
    FROM REST_INFO
) ranked
WHERE rn = 1
ORDER BY FOOD_TYPE DESC;

### **윈도우 함수란?**
# - 일반 집계 함수(`GROUP BY`)와 달리 **원본 행을 유지**하면서 계산
# - 각 행에 대해 관련된 행들의 집합(윈도우)에서 계산 수행

# 서브쿼리의 결과를 ranked라는 임시 테이블로 사용
# WHERE rn = 1 조건으로 각 음식종류별 1등만 선택