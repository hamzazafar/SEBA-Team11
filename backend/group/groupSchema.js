// Load required packages
var mongoose = require('mongoose');

//group ingredients
var Location = new mongoose.Schema({
    longitude: Number,
    latitude: Number
});


// Defining our group schema
var Group  = new mongoose.Schema({
    title: String,
    author: String,
    published_date: Date,
    members_list: [String],
    max_members: Number,
    location: Location,
    meeting_date: Date,
    preferences: String

});

// Export the Mongoose model
module.exports = mongoose.model('Group', Group);
