const mocha =  require('mocha');
const assert = require('assert');
const workExperience = require('../models/work_experience');

// Describe test
describe('Deleting records', function(){

    var work;
    beforeEach(function(done){
        work = new workExperience({
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
    it('Deletes a record from the DB', function(done){
        workExperience.findOneAndRemove({desingnation: 'test desingnation'}).then(function(result){
            workExperience.findOne({desingnation: 'test desingnation'}).then(function(result){
                assert(result === null);
                done();
            });
            
        });
    });
})