const mocha =  require('mocha');
const assert = require('assert');
const workExperience = require('../models/work_experience');

// Describe test
describe('Finding records', function(){

    beforeEach(function(done){
        var work = new workExperience({
            desingnation: 'test desingnation',
            organization: 'test org',
            location: 'test Location',
            startDate: Date().now,
            endDate: Date().now,
            tasks: [
                'test task 1', 'test task2'
            ]
        });
        work.save().then(function(){
            assert(work.isNew === false);
            done();
        });
    })

    // create tests
    it('Finds a record from the DB', function(done){
        workExperience.findOne({desingnation: 'test desingnation'}).then(function(result){
            assert(result.desingnation === 'test desingnation');
            done();
        });
    });
})