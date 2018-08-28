var mongoose = require("mongoose");

var ArticlesSchema = mongoose.Schema({
  loop: { type: String },
  username:{ type: String},
  author: {
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  }
});

var Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;