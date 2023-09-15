const mongoose = require("mongoose");
var tagmap = new mongoose.Schema({
  article_id: { type: mongoose.Schema.Types.ObjectId },
  tag_id: { type: mongoose.Schema.Types.ObjectId },
  year: { type: String },
  // dateLastCrawler: { type: String },
  // statusPageCrawl: { type: String },
});

mongoose.model("Tagmap", tagmap);