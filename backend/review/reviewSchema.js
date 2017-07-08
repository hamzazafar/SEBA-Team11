/**
 * Created by andre on 7/8/2017.
 */
// Load required packages
var mongoose = require('mongoose');

// Defining our review schema
var Reviews = new mongoose.Schema({
    author: String,
    published_date: Date,
    stars: Number,
    comment: String,
});


// Export the Mongoose model
module.exports = mongoose.model('Reviews', Reviews);