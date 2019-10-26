var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Ølsiden', requestType: ['GET', 'GET', 'POST', 'PUT', 'DELETE', 'GET'], 
  url: ['/beers', '/beers/:id', '/beers', '/beers/:id', '/beers/:id', '/users']});
});

module.exports = router;
