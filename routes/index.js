var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'tudo gado ' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'tudo gado ' });
});
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'tudo gado ' });
});


module.exports = router;
