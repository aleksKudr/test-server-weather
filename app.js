
const express = require('express');
const bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('mongoose');
var db =mongoose.createConnection(config.db_main);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Conncet');
    
});
const app = express();
require('./schemas/user.schems');
require('./schemas/history.schema');
// Add Routes
module.exports = {
    main: db
};
// See the react auth blog in which cors is required for access
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
require('./routes/index')(app);


// var jwt = require ('./middlewares/jwt');

// app.get('/', jwt.jwt /* Using the express jwt MW here */ , (req, res) => {
//     res.send('You are authenticated'); //Sending some response when authenticated
// });

// Error handling 
app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send(err);
    } else {
        next(err);
    }
});

// Starting the app on PORT 3000
const PORT = 8080;
app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Magic happens on port ${PORT}`);
});