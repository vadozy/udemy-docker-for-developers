import express from 'express';
import cors from 'cors';

const PORT = 3001;
const app = express();

const corsOption = {
  origin: 'http://localhost:3000'
}

app.use('/test', cors(corsOption));

app.get('/test', (req, res) => {
  console.log('Processing request');
  res.send('Hello from express');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})