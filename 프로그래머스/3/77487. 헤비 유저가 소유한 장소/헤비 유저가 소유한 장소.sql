-- 코드를 입력하세요
# SELECT 
#     *
# FROM 
#     PLACES
# WHERE 
#     HOST_ID IN (
#         SELECT HOST_ID
#         FROM PLACES
#         GROUP BY HOST_ID
#         HAVING COUNT(*) >= 2
#     )
# ORDER BY 
#     ID;
    
SELECT 
    ID, NAME, HOST_ID
FROM (
    SELECT 
        *,
        COUNT(*) OVER (PARTITION BY HOST_ID) AS HOST_COUNT
    FROM 
        PLACES
) AS SUBQUERY
WHERE 
    HOST_COUNT >= 2
ORDER BY 
    ID;