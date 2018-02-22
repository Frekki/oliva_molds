const express = require('express');
const router = express.Router();

const Product = require('../models/product');

/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find((err, docs) => {
    let productChunks = [];
    const chunkSize = 3;
    for (let i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'Oliva Molds',
      products: productChunks
    });
  });
});

module.exports = router;
