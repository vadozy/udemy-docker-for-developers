var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const { MongoClient } = require('mongodb');

const uri = "mongodb://mongodb:27017"
const client = new MongoClient(uri);


client.connect();

async function runMongo() {
  let isConnected = false;
  try {
    //await client.connect();
    await client.db("admin").command({ping: 1});
    isConnected = true;
    console.log('connected to mongo');
  } catch (error) {
    console.error(`something went wrong: ${error}`);
  } finally {
    //await client.close();
    return isConnected;
  }
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/test', async (req, res, next) => {
  const result = await runMongo();
  res.send(`MongoDB is ${result ? 'connected' : 'not connected'}`);
  res.end();
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
