// Load required packages
var mongoose = require('mongoose');

//recipe ingredients
var Ingredient = new mongoose.Schema({
    name: String,
    quantity: String
});

var Review = new mongoose.Schema({
    author: String,
    published_date: Date,
    stars: Number,
    comment: String,
});


// Defining our recipe schema
var Recipe  = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    published_date: Date,
    directions: [String],
    ingredients: [Ingredient],
    reviews: [Review]
});

// Export the Mongoose model
module.exports = mongoose.model('Recipe', Recipe);
