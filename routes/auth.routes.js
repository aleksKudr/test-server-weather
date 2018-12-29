(function (){
    'use strict';
    const AuthController = require('../controllers/auth.controller.js');

    
    module.exports = function (app) {
        // console.log(app);
        app.post('/login', AuthController.login);
        app.post('/regist', AuthController.register);
    };
})();