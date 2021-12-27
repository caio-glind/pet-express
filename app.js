var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



//variavel que gudarda os arquivos de rota secundarias 
var indexRouter = require('./routes/index');
var usuario= require('./routes/usuario')
var pets= require('./routes/pets')
var servico = require('./routes/srevico')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// rotas padrão do peojeto toda rota tem qeu ser endicada aqui 
app.use('/', indexRouter);
app.use("/usuario",usuario)
app.use("/pets",pets)
app.use("/servico",servico)

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
