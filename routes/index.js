var express = require('express');
var router = express.Router();
var Card = require('../models/card');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cards', function(req, res, next) {
	Card.find({ }, function(err, cards) {
	  if (err) console.log(err);
	  
	  res.json(cards);
	});
});

module.exports = router;
