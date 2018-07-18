const express = require('express');

// set up express app
const myProfileApp = express();

// inititalize routes
myProfileApp.use('/api', require('./routes/api'));

// listen for requests
myProfileApp.listen(process.env.port || 4000, function(){
    console.log("Listening on port 4000");
});