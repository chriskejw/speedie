var express = require('express');
var router = express.Router();

// app.get = GET request on the localhost 4000 (listening to a GET request)
// On the localhost render(load) the index page

// setting the route to homepage
// use router.get instead
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/howwasitmade.html', function(req, res) {
  res.render('howwasitmade');
});

router.get('/instructions.html', function(req, res) {
  res.render('instructions');
});

router.get('/play.html', function(req, res) {
  res.render('play');
});

module.exports = router;
