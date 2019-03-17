var express = require('express');
var router = express.Router();

//! Require data.js
const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

/* GET Learn More page. */
router.get('/learnmore', function (req, res, next) {
  res.render('learnmore', { title: 'Express', message: "This is an Express App!" });
});

module.exports = router;
