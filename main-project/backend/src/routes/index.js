import cors from 'cors';
import healthCheck from './health-route.js';
import notes from './notes-route.js';
import bodyParser from 'body-parser';

const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_URL = process.env.CORS_URL || 'localhost';

// const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
const CORS_ADDRESS = '*';
console.log('Cors set to address ', CORS_ADDRESS);

const corsOption = {
  //origin: 'http://localhost:3000'
  origin: CORS_ADDRESS,
};

function initRouters(app) {
  // app.use(cors(corsOption));
  app.use(bodyParser.json());
  app.use(healthCheck);
  app.use(notes);
}

export default initRouters;
