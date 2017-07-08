// Load required packages
var mongoose = require('mongoose');

//recipe ingredients
var Ingredient = new mongoose.Schema({
    name: String,
    quantity: String
});

// Defining our recipe schema
var Recipe  = new mongoose.Schema({
    title: String,
    description: String,
    published_date: Date,
    directions: [String],
    ingredients: [Ingredient],

});

// Export the Mongoose model
module.exports = mongoose.model('Recipe', Recipe);
