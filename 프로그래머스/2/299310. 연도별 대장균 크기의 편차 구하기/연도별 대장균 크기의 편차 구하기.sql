-- 코드를 작성해주세요
SELECT 
    YEAR(DIFFERENTIATION_DATE) AS YEAR,
    (MAX(SIZE_OF_COLONY) OVER (PARTITION BY YEAR(DIFFERENTIATION_DATE)) - SIZE_OF_COLONY) AS YEAR_DEV,
    ID
FROM 
    ECOLI_DATA
ORDER BY 
    YEAR(DIFFERENTIATION_DATE) ASC,
    YEAR_DEV ASC;

# 1. **YEAR(DIFFERENTIATION_DATE)**: 분화 날짜에서 연도를 추출합니다
# 2. **MAX(SIZE_OF_COLONY) OVER (PARTITION BY YEAR(DIFFERENTIATION_DATE))**: 각 연도별로 가장 큰 대장균의 크기를 구합니다 (윈도우 함수)
# 3. **연도별 최대 크기 - SIZE_OF_COLONY**: 각 개체의 편차를 계산합니다
# 4. **ORDER BY**: 연도 오름차순, 같은 연도 내에서는 편차 오름차순으로 정렬합니다