-- 코드를 입력하세요
SELECT
HISTORY_ID,
CAR_ID,
DATE_FORMAT(START_DATE, '%Y-%m-%d') AS START_DATE,
DATE_FORMAT(END_DATE, '%Y-%m-%d') AS END_DATE,
    CASE 
        WHEN DATEDIFF(END_DATE, START_DATE) + 1 >= 30 THEN '장기 대여'
        # 첫째 날(시작일)은 포함하지 않고, 마지막 날(종료일)은 포함하는 방식
        # DATEDIFF('2022-09-01', '2022-09-01')의 결과는 0
        # 그러나 하루를 빌린 것임으로 +1 을 해야 한다.
        ELSE '단기 대여'
    END AS RENT_TYPE
FROM 
    CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE 
    DATE_FORMAT(START_DATE, '%Y-%m') = '2022-09'
ORDER BY 
    HISTORY_ID DESC;