const express = require('express');
const bodyParser =  require('body-parser');
var mongoose = require('mongoose');



// connect to DB
mongoose.connect('mongodb://localhost:27017/test-my-profile-MEAN', { useNewUrlParser: true });

// ES6 promises
mongoose.Promise = global.Promise;

// set up express app
const myProfileApp = express();

myProfileApp.use(express.static('public'));

// use body-parser for handling POST requests
myProfileApp.use(bodyParser.json());

// inititalize routes
myProfileApp.use('/api', require('./routes/api'));

// error handling middleware
myProfileApp.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({
        error: err.message
    });
});

// listen for requests
myProfileApp.listen(process.env.port || 4000, function(){
    console.log("Listening on port 4000");
});