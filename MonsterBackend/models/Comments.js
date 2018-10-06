var mongoose = require("mongoose");

var CommentSchema = mongoose.Schema({
  ArticleId: { type: String },
  comment: { type: String }
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;