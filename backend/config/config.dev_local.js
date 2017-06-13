var Config = {};
Config.db = {
};
Config.app={};
Config.auth = {};

Config.db.host = 'localhost:27017';

//TODO: figure out a better way
Config.db.name = 'cookitall';
Config.db.pass = 'cookitall';

//explicitly use port 3000
Config.app.port = 3000;

//TODO: make it secure!!
Config.auth.jwtSecret = "my cooking secret";

module.exports = Config;
