const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create model and schema
const interestsSchema = new Schema({
    item: String
});

const Interests = mongoose.model('interests', interestsSchema);

module.exports = Interests;