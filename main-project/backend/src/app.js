import express from 'express';
import mongoose from 'mongoose';
import initRouters from './routes/index.js';

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

const app = express();
initRouters(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
