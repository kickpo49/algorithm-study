-- 코드를 작성해주세요
SELECT II.ITEM_ID, II.ITEM_NAME, II.RARITY
FROM ITEM_INFO II
JOIN ITEM_TREE IT
ON II.ITEM_ID = IT.ITEM_ID
WHERE IT.PARENT_ITEM_ID IN (
    SELECT ITEM_ID
    FROM ITEM_INFO
    WHERE RARITY = 'RARE')
ORDER BY ITEM_ID DESC;

#     SELECT ITEM_ID
#     FROM ITEM_INFO
#     WHERE RARITY = 'RARE'

# 출력 결과
# ITEM_ID
# 0
# 1
# 3
# 4
    

# 서브쿼리에서 ITEM_INFO 테이블로부터 희귀도가 'RARE'인 아이템들의 ID를 찾습니다
# ITEM_TREE 테이블에서 PARENT_ITEM_ID가 RARE 아이템 ID인 아이템들을 찾습니다 (이것이 RARE 아이템의 업그레이드 아이템)
# ITEM_INFO 테이블과 조인하여 아이템의 상세 정보(ITEM_ID, ITEM_NAME, RARITY)를 가져옵니다
# 결과를 ITEM_ID 기준 내림차순으로 정렬합니다