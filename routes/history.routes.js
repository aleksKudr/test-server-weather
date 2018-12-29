(function (){
    'use strict';
    const HistoryController = require('../controllers/history.controller.js');
    const jwtMiddleware = require('../middlewares/jwt');
    
    module.exports = function (app) {
        app.get('/history', jwtMiddleware.verifyToken, HistoryController.getHistory);
        app.post('/history', jwtMiddleware.verifyToken, HistoryController.createHistory);
        // app.put('/history', jwtMiddleware.verifyToken, HistoryController.updateHistory);
        // app.delete('/history', jwtMiddleware.verifyToken, HistoryController.deleteHistory);
    };
})();