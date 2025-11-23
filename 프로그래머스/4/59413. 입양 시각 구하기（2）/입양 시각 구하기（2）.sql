-- 코드를 입력하세요
-- CTE(Common Table Expression)를 사용하여 0시부터 23시까지의 시간대 생성
WITH RECURSIVE Hours AS (
    -- 기본 케이스: 0시부터 시작
    SELECT 0 AS HOUR
    
    UNION ALL
    
    -- 재귀 케이스: 이전 시간에 1을 더해가며 23시까지 생성
    -- HOUR가 23 미만일 때만 재귀 실행 (0, 1, 2, ..., 22, 23)
    SELECT HOUR + 1
    FROM Hours
    WHERE HOUR < 23
)

SELECT 
    h.HOUR,                         -- 시간대 (0~23)
    COUNT(a.ANIMAL_ID) AS COUNT     -- 해당 시간대의 입양 건수 / COUNT(*)와 달리 COUNT(컬럼명)은 NULL을 세지 않음
FROM Hours h                        -- 생성한 0~23 시간대 테이블
LEFT JOIN ANIMAL_OUTS a ON h.HOUR = HOUR(a.DATETIME)    -- 입양 시간과 매칭 (HOUR 함수로 시간 추출)
    -- LEFT JOIN을 사용하는 이유:
    -- 입양이 없는 시간대(예: 새벽 0~5시)도 결과에 포함시키기 위함
    -- INNER JOIN을 사용하면 입양이 없는 시간대는 결과에서 제외됨
GROUP BY h.HOUR                     -- 시간대별로 그룹화하여 집계
ORDER BY h.HOUR;                    -- 시간대 순서대로 정렬 (0시부터 23시까지)