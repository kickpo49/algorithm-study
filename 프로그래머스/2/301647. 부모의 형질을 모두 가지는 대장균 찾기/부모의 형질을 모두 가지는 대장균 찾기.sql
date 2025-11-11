-- 코드를 작성해주세요
SELECT 
    C.ID,
    C.GENOTYPE,
    P.GENOTYPE AS PARENT_GENOTYPE
FROM ECOLI_DATA C
JOIN ECOLI_DATA P ON C.PARENT_ID = P.ID
WHERE (C.GENOTYPE & P.GENOTYPE) = P.GENOTYPE
ORDER BY C.ID;

# C.GENOTYPE & P.GENOTYPE: 자식과 부모의 형질에서 공통된 비트를 추출

# = P.GENOTYPE: 그 결과가 부모의 형질과 동일하면, 자식이 부모의 형질을 모두 보유하고 있다는 의미입니다

# 예시:

# 부모 형질: 0101 (5)
# 자식 형질: 0111 (7)
# 0111 & 0101 = 0101 → 부모 형질과 동일 ✓
# 부모 형질: 0101 (5)
# 자식 형질: 0100 (4)
# 0100 & 0101 = 0100 → 부모 형질과 다름✗
