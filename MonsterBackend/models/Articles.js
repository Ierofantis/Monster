var mongoose = require("mongoose");

var ArticlesSchema = mongoose.Schema({
  id: { type: String },
  title: { type: String },
  loop: { type: String },
  username: { type: String },
  comment: { type: String }
});

var Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;