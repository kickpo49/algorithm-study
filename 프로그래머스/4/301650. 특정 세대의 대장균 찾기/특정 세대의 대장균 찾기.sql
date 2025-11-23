-- 코드를 작성해주세요
SELECT gen3.ID
FROM ECOLI_DATA gen3
JOIN ECOLI_DATA gen2 ON gen3.PARENT_ID = gen2.ID
JOIN ECOLI_DATA gen1 ON gen2.PARENT_ID = gen1.ID
WHERE gen1.PARENT_ID IS NULL
ORDER BY gen3.ID ASC;

# WITH RECURSIVE Generation AS (
#     -- 1세대: 부모가 없는 대장균
#     SELECT ID, PARENT_ID, 1 AS gen
#     FROM ECOLI_DATA
#     WHERE PARENT_ID IS NULL
    
#     UNION ALL
    
#     -- 재귀: 이전 세대의 자식들
#     SELECT e.ID, e.PARENT_ID, g.gen + 1
#     FROM ECOLI_DATA e
#     JOIN Generation g ON e.PARENT_ID = g.ID
# )
# SELECT ID
# FROM Generation
# WHERE gen = 3
# ORDER BY ID ASC;