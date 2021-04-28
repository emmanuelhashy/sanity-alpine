var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/robots', function(req, res, next) {
  res.render('robots', { title: 'Robot List' });
});


module.exports = router;
