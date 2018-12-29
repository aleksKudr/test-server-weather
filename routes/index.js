module.exports = function(app) {
    require('./auth.routes')(app);
    require('./history.routes')(app);
};
