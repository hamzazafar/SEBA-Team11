// Load required packages
var mongoose = require('mongoose');


// Defining our group schema
var Group  = new mongoose.Schema({
    title: String,
    author: String,
    published_date: Date,
    members_list: [String],
    max_members: Number,
    location: String,
    meeting_date: Date,
    preferences: String,
    description: String

});

// Export the Mongoose model
module.exports = mongoose.model('Group', Group);
