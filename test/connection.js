var mongoose = require('mongoose');

// connect to mongo db

mongoose.connect('mongodb://localhost/test-my-profile-MEAN');

mongoose.connection.once('open', function(){
  console.log('connection has been made  to test DB');
}).on('error', function(err){
  console.log('connection erroe', err);
});