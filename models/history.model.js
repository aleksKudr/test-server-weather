(function(){
    'use strict';
    var server = require('../app');
    var History = server.main.model('History');

    module.exports = {
        create,
        get
    };

    function create (data) {
        return new Promise(function (resolve, reject){
            History
            .create(data,
              function(err,response){
                  if (err){
                      reject(err);
                  } else {
                      resolve(response);
                  }
              });
        });
    }

    function get (params) {
        return new Promise(function(resolve,reject){
            History
            .find(params)
            .lean()
            .exec(function (err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });
    }
})();