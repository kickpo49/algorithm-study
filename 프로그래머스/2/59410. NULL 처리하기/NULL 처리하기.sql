-- 코드를 입력하세요
# CASE WHEN 사용
# SELECT
#     ANIMAL_TYPE,
#     CASE
#         WHEN NAME IS NULL THEN 'No name'
#         ELSE NAME
#     END AS NAME,
#     SEX_UPON_INTAKE
# FROM ANIMAL_INS;

# IFNULL 사용
# SELECT
#     ANIMAL_TYPE,
#     IFNULL(NAME, 'No name') AS NAME,
#     SEX_UPON_INTAKE
# FROM ANIMAL_INS;

# COALESCE 사용
# COALESCE는 여러 개의 값 중에서 NULL이 아닌 첫 번째 값을 반환하는 함수
SELECT
    ANIMAL_TYPE,
    COALESCE(NAME, 'No name') AS NAME,
    SEX_UPON_INTAKE
FROM ANIMAL_INS;