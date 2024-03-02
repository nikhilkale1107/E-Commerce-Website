const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');  // To Save Product Entered

// To import Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');
const errorControllers = require('./controllers/error'); // Imported Controllers from error controllers

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

// Used Imported Routes
app.use(shopRoutes);
app.use('/admin',adminRoutes);
app.use(contactusRoutes);
app.use(successRoutes);

app.use(errorControllers.get404); // Used Imported Controller

app.listen(5000);