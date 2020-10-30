import express from 'express';
import * as healthController from '../controllers/health-controller.js';

const router = express.Router();

router.get('/test', healthController.testResponse);

router.get('/healthcheck', healthController.ping);

export default router;
