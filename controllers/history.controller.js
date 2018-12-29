(function() {

    var User = require('../models/user.model');
    var History = require('../models/history.model');

    'use strict';
    function createHistory (req, res) {
        Promise.resolve()
            .then(function(){ 
                return User.get({
                    _id: req.user.id
                });
            })
            .then(function(user){
                console.log('user', user);
                const historyObject = {
                    city: req.body.data.city,
                    createdAt: new Date(),
                    list: req.body.data.list,
                    userId: user[0]._id
                };
                return History.create(historyObject);

            })
            .then(function(response) {
                // console.log('response', response);
                res.status(200).send(response);
                return;
            });
    }

    function getHistory(req, res) {
        Promise.resolve()
            .then(function(){ 
                return User.get({
                    _id: req.user.id
                });
            }) 
            .then(function(user){
                console.log('user', user);
                return History.get({userId: user[0]._id});
            })
            .then(function(response) {
                // console.log('response', response);
                res.status(200).send(response);
                return;
            });


    }
    
    module.exports = {
        createHistory: createHistory,
        getHistory: getHistory,
    };
})();