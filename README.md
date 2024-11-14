# 실행방법
```shell
#필요한 모듈 설치
npm install <패키지>

#서버 실행
node app.js

#POST 요청
curl -X POST http://localhost:3000/api/diary \
-H "Content-Type: application/json" \
-d "{
  \"title\": \"일기 제목\",
  \"content\": \"일기 내용\",
  \"weather\": 1,
  \"view_scope\": true,
  \"lat\": 37.5665,
  \"lng\": 126.978
}"
```
