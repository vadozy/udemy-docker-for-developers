import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = process.env.MONGO_URL;
const MONGO_DB = `mongodb://${MONGO_URL}:${MONGO_PORT}`;

mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', err => console.error(`MongoDb connection error: ${err}`));

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

app.get('/healthcheck', cors(corsOption), (req, res) => {
  mongoose.connection.db.admin().ping((error, result) => {
    if (error || !result) {
      res.send({
        message: `Ping failed with error: ${error}`,
        status: 'fail',
      });
    } else {
      res.send({
        message: `Connection with mongo is up: ${result}`,
        status: 'success',
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})