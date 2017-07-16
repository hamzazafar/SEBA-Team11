// Load required packages
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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
    group_id: String,
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

var Entry = mongoose.model('Group', Group);

var group1 = new Entry ({
    group_id: "01",
    title: "Munich Cooking Meetup",
    author: "biljali",
    published_date: new Date(),
    members_list: ["Teo Lata", "Andreea Niculescu", "seba12", "john21"],
    max_members: 5,
    location: {
        street: "Oslostraße",
        number: "2",
        postal_code: "81829",
        city: "Munich",
        country: "Germany"},
    meeting_date: "2017-08-23T18:25:43.511Z",
    meeting_time: "5PM",
    preferences: "meat",
    description: "Let's meet and cook together some delicious meals!",
    comments: [{
        author: "john21",
        published_date: new Date() ,
        comment: "Great! What shall we cook? Any suggestions?"}, {
        author: "biljali",
        published_date: new Date() ,
        comment: "I would like to try out this new chicken recipe and pancakes!!!"}]
})

var group2 = new Entry ({
    group_id: "02",
    title: "Super Cook",
    author: "Teo Lata",
    published_date: new Date(),
    members_list: ["biljali", "andreea", "nana98", "sara1"],
    max_members: 4,
    location: {
        street: "Plinganserstraße",
        number: "22",
        postal_code: "81369",
        city: "Munich",
        country: "Germany"},
    meeting_date: "2017-07-23T18:25:43.511Z",
    meeting_time: "9PM",
    preferences: "vegan",
    description: "Vegan power! Let's meet and have a great cooking time together! :-)",
    comments: [{
        author: "andreea",
        published_date: new Date() ,
        comment: "Awesome! I had a really good experience last time, don't want to miss this."}, {
        author: "amil22",
        published_date: new Date() ,
        comment: "I would like to join, can you accept one more member? :-( "}]
})

var group3 = new Entry ({
    group_id: "03",
    title: "Garching Nerdy Cooking Group",
    author: "seba",
    published_date: new Date(),
    members_list: [],
    max_members: 100,
    location: {
        street: "Boltzmannstraße",
        number: "3",
        postal_code: "85748",
        city: "Garching",
        country: "Germany"},
    meeting_date: "2017-08-10T18:25:43.511Z",
    meeting_time: "8PM",
    preferences: "vegeterian",
    description: "Cooking time after hard seba time :-)",
    comments: []
})

Entry.find({group_id: "01"}, function (err, groups) {
    if(groups.length > 0){
        console.log('Group already exists');
    } else{
        group1.save(function(err, Group){
            if(err) return console.error("Error while saving data to MongoDB: " + err); // <- this gets executed when there's an error
            console.error(Group); // <- this never gets logged, even if there's no error.
        });
    }
});

Entry.find({group_id: "02"}, function (err, groups) {
    if(groups.length > 0){
        console.log('Group already exists');
    } else{
        group2.save(function(err, Group){
            if(err) return console.error("Error while saving data to MongoDB: " + err); // <- this gets executed when there's an error
            console.error(Group); // <- this never gets logged, even if there's no error.
        });
    }
});

Entry.find({group_id: "03"}, function (err, groups) {
    if(groups.length > 0){
        console.log('Group already exists');
    } else{
        group3.save(function(err, Group){
            if(err) return console.error("Error while saving data to MongoDB: " + err); // <- this gets executed when there's an error
            console.error(Group); // <- this never gets logged, even if there's no error.
        });
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Group', Group);
