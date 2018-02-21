const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Oliva Molds' });
});

module.exports = router;
