var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const env =  require('dotenv');
const mongoose = require('mongoose');
env.config();
const d = require('debug')('debug:app.js');
require('./bootstrap')();

var userR = require('./routes/user.route');
var blogR = require('./routes/blog.route');
var commentR = require('./routes/comment.route');
var cors =require('cors');

var app = express();
app.use(cors({
  exposedHeaders: 'x-auth-token',
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
d(`mongodb url is ${process.env.MONGO_DB_URL}`);
mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true})

app.use('/user', userR);
app.use('/blog', blogR);
app.use('/comment', commentR);

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
