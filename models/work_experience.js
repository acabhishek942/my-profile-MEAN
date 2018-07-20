const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create model and schema

const workExperienceSchema = new Schema({
    desingnation: {
        type: String,
        required: [true, 'Designation is required']},
    organization: String,
    location: String,
    startDate: String,
    endDate: String,
    tasks: mongoose.Schema.Types.Mixed // using mixed Schema for array of string
});

const WorkExperience = mongoose.model('workExperience', workExperienceSchema);

module.exports = WorkExperience;
