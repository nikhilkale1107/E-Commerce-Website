const path = require('path');
const rootDir = require('../util/path');

// Exporting to admin.js
exports.getAddProduct = (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    };

// Exporting to admin.js
exports.postAddProduct = (req,res,next)=>{
        res.redirect('/');
    };

// Exporting to shop.js
exports.getProducts = (req, res, next)=>{
        res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    };