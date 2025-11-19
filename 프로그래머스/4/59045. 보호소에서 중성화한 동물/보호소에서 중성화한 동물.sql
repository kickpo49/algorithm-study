-- 코드를 입력하세요
SELECT
O.ANIMAL_ID,
O.ANIMAL_TYPE,
O.NAME
FROM ANIMAL_INS I
JOIN ANIMAL_OUTS O ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE I.SEX_UPON_INTAKE IN ('Intact Male', 'Intact Female') AND O.SEX_UPON_OUTCOME IN ('Neutered Male', 'Spayed Female')
ORDER BY O.ANIMAL_ID ASC;

# SELECT * FROM ANIMAL_INS

# Intact Male > Neutered Male
# Intact Female > Spayed Female