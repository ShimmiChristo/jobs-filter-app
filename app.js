const createError = require('http-errors');
const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
const path = require('path');
// const fs = require('fs');


var indexRouter = require('./routes/index');
var craigslistRouter = require('./routes/craigslist');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/craigslist', craigslistRouter);

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
  // res.render('error');
  res.send('error');
});

 
module.exports = app;