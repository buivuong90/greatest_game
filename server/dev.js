var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var device = require('express-device');

app.set('views', path.resolve(__dirname, 'dist'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(device.capture());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname+'/plugins'));
app.use(express.static(__dirname+'/dist'));
app.use(express.static(__dirname+'/images'));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname+ '/dist/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(8090, function () {
    console.log('Example listening on port 8090!');
});

module.exports = app;