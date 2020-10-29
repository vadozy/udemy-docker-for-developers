import mongoose from 'mongoose';

export function testResponse(req, res) {
  console.log('Processing request');
  res.send('Hello from express with nodemon');
}

export function ping(req, res) {
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
}
