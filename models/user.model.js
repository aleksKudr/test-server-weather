(function(){
    'use strict';
    var server = require('../app');
    // var mongoose = require('mongoose');
    var User = server.main.model('User');

    module.exports = {
        create,
        update,
        get
    };

    function create (userData) {
        return new Promise(function (resolve,reject){
            User
            .create(userData,
                function(err,user){
                    if (err){
                        console.log(err);
                        reject(err);
                    } else {
                        resolve(user);
                    }
                });
        });
    }

    function get (params) {
        return new Promise(function(resolve,reject){
            User
				.find(params)
				.lean()
				.exec(function (err, users) {
    if (err) {
        reject(err);
    } else {
        resolve(users);
    }
});
        });
    }

    
    function update (query, data) {
        return new Promise(function (resolve, reject) {
            User
                .findOneAndUpdate(query, data, { new: true })
                .exec(function (err, user) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(user);
                    }
                });
        });
    }
})();