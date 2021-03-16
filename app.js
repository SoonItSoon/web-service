import express from 'express';
// Packages
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import {} from 'dotenv/config';
import firebase from './firebase';
// Locals
import locals from './locals';
// Routers
import indexRouter from './routers/indexRouter';
import usersRouter from'./routers/usersRouter';
// Routes
import routes from './routes';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// packages setup
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// locals setup
app.use(locals);
// routers setup
app.use(routes.home.single, indexRouter);
app.use(routes.users.single, usersRouter);

// test
app.use('/test', (req, res) => {
  res.render('test');
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
