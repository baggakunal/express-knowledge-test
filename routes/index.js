var express = require('express');
const router = express.Router({
  caseSensitive: true
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Us' });
});

router.get('/About', function (req, res, next) {
  res.render('A-bout', { title: 'About Us' });
});

module.exports = router;
