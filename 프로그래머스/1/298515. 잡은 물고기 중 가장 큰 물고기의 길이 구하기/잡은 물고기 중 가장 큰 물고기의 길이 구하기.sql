-- 코드를 작성해주세요
# SELECT * FROM FISH_INFO
SELECT CONCAT(MAX(LENGTH), 'cm') AS MAX_LENGTH
FROM FISH_INFO

# CONCAT = CONCATenate (연결하다)
# 여러 개의 문자열(또는 값)을 하나로 붙여주는 함수