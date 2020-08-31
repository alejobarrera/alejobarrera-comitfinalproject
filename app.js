var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/finalproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db connected.');
});

var indexRouter = require('./routes/index');
var AboutusRouter = require('./routes/about-us');
var ServicesRouter = require('./routes/services');
var CoursesRouter = require('./routes/courses');
var NewsRouter = require('./routes/listposts');
var AddPostRouter = require('./routes/newpost');
var FAQsRouter = require('./routes/faqs');
var AddFAQRouter = require('./routes/newfaq');
var ContactRouter = require('./routes/contact');
var ListContactRouter = require('./routes/listcontact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about-us', AboutusRouter);
app.use('/news', NewsRouter);
app.use('/', AddPostRouter);
app.use('/services', ServicesRouter);
app.use('/courses', CoursesRouter);
app.use('/faqs', FAQsRouter);
app.use('/', AddFAQRouter);
app.use('/', ContactRouter);
app.use('/', ListContactRouter);


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
