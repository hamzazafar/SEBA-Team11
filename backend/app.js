var Config = require('./config/config.js');

//connect to mongodb
console.log("Trying to establish DB connection: %s", Config.db.host)

var mongoose = require('mongoose');
mongoose.connect([Config.db.host, '/', Config.db.name].join(''),{
    user: Config.db.user,
    pass: Config.db.pass
});
console.log("DB connection established..")

//create app
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

//application setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//passport
var passport = require('passport');
var jwtConfig = require('./passport/jwtConfig');
app.use(passport.initialize());
jwtConfig(passport);

//routing
var userRoutes = require("./user/userRoutes");
app.use('/api/user', userRoutes(passport));

var recipeRoutes = require("./recipe/recipeRoutes");
app.use('/api/recipes', recipeRoutes(passport));

//routes for other modules to be defined here ... 

module.exports = app;
