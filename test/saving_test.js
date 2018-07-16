const mocha =  require('mocha');
const assert = require('assert');
const workExperience = require('../models/work_experience');

// Describe test
describe('Saving records', function(){

    // create tests
    it('Saves a record to the DB', function(done){
        var work = new workExperience({
            desingnation: 'test desingnation',
            organization: 'test org',
            location: 'test Location',
            startDate: Date().now,
            endDate: Date().now,
            tasks: [{item:'test task 1', item: 'test task2'}]
        });
        work.save().then(function(){
            assert(work.isNew === false);
            done();
        });
    });
})