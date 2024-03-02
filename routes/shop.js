const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/products');

router.get('/', productsControllers.getProducts );

module.exports = router;