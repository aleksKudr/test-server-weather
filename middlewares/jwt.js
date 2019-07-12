(function(){
    'use strict';
    const secret = 'keyboard cat 4 ever';
    const jwt = require('jsonwebtoken');

    const verifyToken = function(req, res, next) {
        jwt.verify(req.headers.authorization, secret, function(err, decoded) {
            if (err) {
                return res.status(401).send('Unauthorized');
            }
            req.user = {
                id: decoded.id,
                username: decoded.username
            };
            next();
        });
    };
    module.exports = {
        verifyToken: verifyToken
        
    };
})();
