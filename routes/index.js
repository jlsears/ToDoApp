var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("There's a thing!");
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Do These Things' });
});

module.exports = router;
