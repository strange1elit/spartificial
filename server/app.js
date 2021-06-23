var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var mongoose=require('mongoose')
var passport=require('passport')
var session=require('express-session')
var FileStore=require('session-file-store')(session)
var config=require('./config')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var paymentRouter= require('./routes/payments')

var app = express();

mongoose.connect(config.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(()=>{
  console.log('Connected to Database')
}).catch((err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('12345-67890-09876-54321'));
//app.use(express.static(path.join(__dirname, 'build')));

app.use(session({
  name:'session-id',
  secret:'12345-67890-09876-54321',
  saveUninitialized:false,
  resave:false,
  store:new FileStore()
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/payments',paymentRouter)

//app.get('*',(req,res)=>{res.sendFile(path.join(__dirname,'build','index.html'))})

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
