const express = require('express');

// set up express app
const myProfileApp = express();

// listen for requests
myProfileApp.listen(process.env.port || 4000, function(){
    console.log("Listening on port 4000");
});