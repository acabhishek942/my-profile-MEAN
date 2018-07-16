const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create model and schema
const workExperienceSchema = new Schema({
    desingnation: String,
    organization: String,
    location: String,
    startDate: Date,
    endDate: Date,
    tasks: [{
        type: String
    }]
});

const WorkExperience = mongoose.model('workExperience', workExperienceSchema);

module.exports = WorkExperience;
