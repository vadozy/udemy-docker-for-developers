import cors from 'cors';
import healthCheck from './health-route.js';

const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_URL = process.env.CORS_URL || 'localhost';

const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
console.log('Cors set to address ', CORS_ADDRESS);

const corsOption = {
  //origin: 'http://localhost:3000'
  origin: CORS_ADDRESS
}

function initRouters(app) {
  app.use(cors(corsOption));
  app.use(healthCheck);
}

export default initRouters;
