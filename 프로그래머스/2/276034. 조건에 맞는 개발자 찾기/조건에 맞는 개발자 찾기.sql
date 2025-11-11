-- 코드를 작성해주세요
SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPERS
WHERE SKILL_CODE & (
    SELECT CODE 
    FROM SKILLCODES 
    WHERE NAME = 'Python'
) > 0
OR SKILL_CODE & (
    SELECT CODE 
    FROM SKILLCODES 
    WHERE NAME = 'C#'
) > 0
ORDER BY ID;

# 비트 연산 (&): SKILL_CODE 컬럼이 비트마스크 형태로 여러 스킬을 저장하고 있다고 가정했습니다. 비트 AND 연산으로 특정 스킬 보유 여부를 확인합니다.
# 서브쿼리: SKILLCODES 테이블에서 'Python'과 'C#'의 코드값을 각각 조회합니다.