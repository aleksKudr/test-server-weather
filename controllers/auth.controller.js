(function () {
    'use strict';
    var user = require('../models/user.model');
    const jwt = require('jsonwebtoken');
    const secret = 'keyboard cat 4 ever';
   
    
    module.exports = {
        login: login,
        register: register,
    };
    function register (req,res) {
        
        let username = req.body.username;
        let password = req.body.password;
        Promise.resolve()
            .then(function(){ return user.create({name:username,password:password});})
            .then(function(objUser){
                
                if (!objUser) {
                    res.status(401).json({
                        sucess: false,
                        token: null,
                        err: 'Username or password is incorrect'
                    });
                    return;
                } else {
                    let token = jwt.sign({
                        id: objUser._id,
                        username: objUser.name
                    }, secret, {
                        expiresIn: 129600
                    });
                
                    res.json({
                        sucess: true,
                        err: null,
                        token
                    });
                    return;}
            });
   
    
    }

    function login(req, res){
        let username = req.body.username;
        let password = req.body.password;
        Promise.resolve()
            .then(function(){ return user.get({name: username, password:password});})
            .then(function(objUser){
                if (!objUser[0]) {
                    res.status(401).json({
                        sucess: false,
                        token: null,
                        err: 'Username or password is incorrect'
                    });
                    return;
                } else {
                    let token = jwt.sign({
                        id: objUser[0]._id,
                        username: objUser[0].name
                    }, secret, {
                        expiresIn: 129600
                    });
                
                    res.json({
                        sucess: true,
                        err: null,
                        token
                    });
                    return;
                }
           
            });

        
    }

   
     
})();