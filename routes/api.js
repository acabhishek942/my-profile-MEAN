const express = require('express');
const router = express.Router();

const WorkExperience = require('../models/work_experience');

// get all the data from DB to the home screen
router.get('/', function(req, res){
    // get data from DB
    res.send({type:'GET'});
});

router.post('/work-experience', function(req, res){
    // add work experience
    WorkExperience.create(req.body).then(function(data){
        res.send(data);
    })
});

router.post('/skills', function(req, res){
    // add skill
    res.send({type:'POST'});
});

router.post('/links', function(req, res){
    // add a new link
    res.send({type:'POST'});
});

router.post('/interests', function(req, res){
    // add an interest
    res.send({type:'POST'});
});

module.exports = router;