var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  note: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);

//export model
module.exports = Article;