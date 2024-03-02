const path = require('path');
const rootDir = require('../util/path');


// Exporting Controllers to Routers
exports.contactusControllers = (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
}

exports.postcontactusControllers = (req,res,next)=>{
    res.redirect('/');
}


