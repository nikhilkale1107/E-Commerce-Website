const express = require('express');
const router = express.Router();

const contactusControllers = require('../controllers/contactus'); //Importing Controllers from contactus controllers

router.get('/contactus', contactusControllers.contactusControllers );
router.post('/contactus', contactusControllers.postcontactusControllers );

module.exports = router;