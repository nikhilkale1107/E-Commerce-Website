const express = require('express');
const router = express.Router();

const successControllers = require('../controllers/success');

router.get('/success', successControllers.successControllers );

module.exports = router