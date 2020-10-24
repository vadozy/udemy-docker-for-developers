import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3001;
const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_URL = process.env.CORS_URL || 'localhost';

const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
console.log('Cors set to address ', CORS_ADDRESS);

const app = express();

const corsOption = {
  //origin: 'http://localhost:3000'
  origin: CORS_ADDRESS
}

app.use('/test', cors(corsOption));

app.get('/test', (req, res) => {
  console.log('Processing request');
  res.send('Hello from express!!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})