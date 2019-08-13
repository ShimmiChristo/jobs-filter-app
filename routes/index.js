var express = require('express');
var router = express.Router();
var cors = require('cors');

const options = {
  origin: true,
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": true,
  "Access-Control-Allow-Headers": true,
  "Access-Control-Expose-Headers": true
};


/* GET home page. */
router.get('/', cors(options), function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('Index Page');
});

module.exports = router;
