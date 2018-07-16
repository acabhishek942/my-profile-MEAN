const mocha =  require('mocha');
const assert = require('assert');
const workExperience = require('../models/work_experience');

// Describe test
describe('Updating record', function(){

    var work;
    beforeEach(function(done){
        work = new workExperience({
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
    })

    // create tests
    it('Update a record from the DB', function(done){
        workExperience.findOneAndUpdate({desingnation: 'test desingnation'}, {desingnation: 'updated desingnation'}).then(function(){
            workExperience.findOne({desingnation: 'updated desingnation'}).then(function(result){
                assert(result.desingnation==='updated desingnation');
                done();
            })
        })
    });
})