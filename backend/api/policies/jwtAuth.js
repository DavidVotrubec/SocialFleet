// jwt user id is in every header

var jwt = require('jwt-simple');
var config = require('../services/config');

// every policy is a express middleware so it has access to req and res
module.exports = function(req, res, next){
    
    if (!req.headers.authorization) {
        return res.status(401).send('Not authorized');
    }
    
    // auth header looks like 
    // "bearer token"
    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, config.TOKEN_SECRET);
    
    // sub means subject and should contain the user id
    if (!payload.sub){
        return res.status(401).send('Not authorized');
    }
    
    req.userId = payload.sub;
    
    // call next policy if there is any
    next();
}