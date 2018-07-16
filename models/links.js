const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create model and schema
const linksSchema = new Schema({
    item:{
        website: String,
        link: String
        }
});

const Links = mongoose.model('links', linksSchema);

module.exports = Links;