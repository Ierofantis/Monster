var mongoose = require("mongoose");

var ArticlesSchema = mongoose.Schema({
  loop:{type: String},   
  username: {type: String}     
});

var Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;