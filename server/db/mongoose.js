//ES 6 syntax for loading modules
var mongoose = require('mongoose');

//Tell mongoose that we want to use the built-in promise instead
//of some third party promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/MongooseLearning', {useNewUrlParser : true});

module.exports = { mongoose };