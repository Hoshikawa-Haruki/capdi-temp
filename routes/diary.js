const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 메모리 기반 데이터 저장 구조
let diaries = [];
let diaryId = 1; // diary 번호를 생성할 때 사용할 ID 카운터

// 일기 생성
app.post('/api/diary', (req, res) => {
  const { title, content, weather, view_scope, lat, lng } = req.body;
  const diary = {
    diaryno: diaryId++, // 자동 증가
    title,
    content,
    weather: weather || 0,
    view_scope: view_scope || false,
    lat,
    lng,
  };
  diaries.push(diary);
  res.status(201).json(diary);
});

// 모든 일기 조회
app.get('/api/diary', (req, res) => {
  res.json(diaries);
});

// 특정 일기 조회
app.get('/api/diary/:id', (req, res) => {
  const diary = diaries.find(d => d.diaryno === parseInt(req.params.id));
  if (diary) {
      res.json(diary);
  } else {
      res.status(404).json({ error: 'Diary not found' });
  }
});


// 일기 수정
app.put('/api/diary/:id', (req, res) => {
  const diaryIndex = diaries.findIndex(d => d.diaryno === parseInt(req.params.id));
  if (diaryIndex === -1) {
    return res.status(404).json({ error: 'Diary not found' });
  }
  
  const { title, content, weather, view_scope, lat, lng } = req.body;
  const updatedDiary = {
    ...diaries[diaryIndex],
    title,
    content,
    weather: weather || diaries[diaryIndex].weather,
    view_scope: view_scope !== undefined ? view_scope : diaries[diaryIndex].view_scope,
    lat,
    lng,
  };
  diaries[diaryIndex] = updatedDiary;
  res.json(updatedDiary);
});

// 일기 삭제
app.delete('/api/diary/:id', (req, res) => {
  const diaryIndex = diaries.findIndex(d => d.diaryno === parseInt(req.params.id));
  if (diaryIndex === -1) {
    return res.status(404).json({ error: 'Diary not found' });
  }
  diaries.splice(diaryIndex, 1);
  res.json({ message: 'Diary deleted' });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

