(function (){
    'use strict';
    const AuthController = require('../controllers/auth.controller.js');

    
    module.exports = function (app) {
        app.post('/login', AuthController.login);
        app.post('/regist', AuthController.register);
    };
})();