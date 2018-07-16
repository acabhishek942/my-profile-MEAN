const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create model and schema
const skillsSchema = new Schema({
    item:{
        field: String,
        values: [{
            type: String
        }]
    }
});

const Skills = mongoose.model('skills', skillsSchema);

module.exports = Skills;