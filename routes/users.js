var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('[{"username": "Ølkenderen", "type": "Entusiast"}, {"username": "Proffesoren", "type": "Ekspert"}]');
});

module.exports = router;
