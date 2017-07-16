// Load required packages
var mongoose = require('mongoose');

var Location = new mongoose.Schema({
    street: String,
    number: String,
    postal_code: String,
    city: String,
    country: String
});

var Comment = new mongoose.Schema({
    author: String,
    published_date: Date,
    comment: String,
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
    meeting_time: String,
    preferences: String,
    description: String,
    comments: [Comment]

});

// Export the Mongoose model
module.exports = mongoose.model('Group', Group);
