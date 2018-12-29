(function(){
    'use strict';
    var server = require('../app');
    var History = server.main.model('History');

    module.exports = {
        create,
      // update,
        get
    };

    function create (data) {
        return new Promise(function (resolve, reject){
            History
            .create(data,
              function(err,response){
                  if (err){
                      console.log(err);
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

  
//   function update (query, data) {
//       return new Promise(function (resolve, reject) {
//           User
//               .findOneAndUpdate(query, data, { new: true })
//               .exec(function (err, user) {
//                   if (err) {
//                       reject(err);
//                   } else {
//                       resolve(user);
//                   }
//               });
//       });
//   }
})();