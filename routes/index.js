var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Service Worker Simple Example'
  });
});

router.post('/queryData', function(req, res, next) {
  res.sendStatus(200);
});

module.exports = router;