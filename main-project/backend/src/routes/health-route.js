import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/test', (req, res) => {
  console.log('Processing request');
  res.send('Hello from express!!');
});

router.get('/healthcheck', (req, res) => {
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

export default router;
