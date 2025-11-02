-- 코드를 작성해주세요
# &는 비트 연산
SELECT COUNT(*) AS COUNT
FROM ECOLI_DATA
WHERE (GENOTYPE & 2) = 0
  AND ((GENOTYPE & 1) = 1 OR (GENOTYPE & 4) = 4)

# '가독성'의 이유로 > 0은 "비트가 켜져 있는가?"를 직관적으로 표현
# SELECT COUNT(*) AS COUNT
# FROM ECOLI_DATA
# WHERE (GENOTYPE & 2) = 0
#   AND ((GENOTYPE & 1) > 0 OR (GENOTYPE & 4) > 0)