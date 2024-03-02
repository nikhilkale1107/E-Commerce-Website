const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/products');

router.get('/add-product', productsControllers.getAddProduct );
router.post('/add-product', productsControllers.postAddProduct );

module.exports = router;