var express = require('express');
var router = express.Router();
var url = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('[{"id":"1", "navn":"Tuborg", "smag":"Tis"}, {"id":"2", "navn":"Carlsberg", "smag":"Opvaskevand"}, {"id":"3", "navn":"Krenkerup Doppel Bock", "smag":"Manifique"}]');
});

router.post('/', function(req, res, next){
    res.send("Modtager et ølobjekt og viser det igen")
});

router.get('/:id', function(req, res, next){
    var path = req.url.substr(1);
    console.log(path);
    var beerObject = "Ingen øl fundet";
    if(path == '1'){
        beerObject = '{"id":"1", "navn":"Tuborg", "smag":"Tis"}';
    }else if (path == '2'){
        beerObject = '{"id":"2", "navn":"Carlsberg", "smag":"Opvaskevand"}';
    }else if(path == '3'){
        beerObject = '{"id":"3", "navn":"Krenkerup Doppel Bock", "smag":"Manifique"}';
    }
    res.send(beerObject);
});

router.put('/:id', function(req, res, next){
    var path = req.url.substr(1);
    console.log(path);
    res.send("Opdaterer ølobjekt med id " + parseInt(path, 10));
});

router.delete('/:id', function(req, res, next){
    var path = req.url.substr(1);
    console.log(path);
    res.send("Sletter ølobjekt med id " + parseInt(path, 10));
});



module.exports = router;
