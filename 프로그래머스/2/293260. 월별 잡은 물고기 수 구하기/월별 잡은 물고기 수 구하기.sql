-- 코드를 작성해주세요
SELECT
    COUNT(*) AS FISH_COUNT,
    MONTH(TIME) AS MONTH
FROM FISH_INFO
GROUP BY MONTH
ORDER BY MONTH ASC;

# MONTH 함수 사용

# DATE_FORMAT(TIME, '%c') AS MONTH 시 결과가 문자열이라서
# 문자열 정렬 방식으로 정렬되어 1, 12, 3, 4, 6, 7 순서가 됨