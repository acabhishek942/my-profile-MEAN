var mongoose = require('mongoose');

// ES6 promises
mongoose.Promise = global.Promise;

// connect to DB before test runs
before(function(done){
    // connect to mongo db
    mongoose.connect('mongodb://localhost:27017/test-my-profile-MEAN', { useNewUrlParser: true });

    mongoose.connection.once('open', function(){
    console.log('connection has been made  to test DB');
    done();
    }).on('error', function(err){
    console.log('connection erroe', err);
    });
});

// drop the collection before each test
beforeEach(function(done){
    // drop the collection
    mongoose.connection.collections.workexperiences.drop(function(){
        done();
    });
});