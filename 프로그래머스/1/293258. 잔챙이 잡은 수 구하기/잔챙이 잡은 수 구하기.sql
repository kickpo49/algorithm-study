-- 코드를 작성해주세요
# 문제가 잘못 출제됨 길이가 10cm 이하인 물고기의 수 조건을 빼고 LENGTH가 NULL인 경우로 답안 제출
SELECT COUNT(*) AS FISH_COUNT
FROM FISH_INFO
WHERE LENGTH IS NULL;