const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create model and schema

const taskSchema = new Schema({
    item: String
});
const workExperienceSchema = new Schema({
    desingnation: String,
    organization: String,
    location: String,
    startDate: Date,
    endDate: Date,
    tasks: [taskSchema]
});

const WorkExperience = mongoose.model('workExperience', workExperienceSchema);

module.exports = WorkExperience;
